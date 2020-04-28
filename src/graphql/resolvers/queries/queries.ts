import { config } from "dotenv";
config();
import * as directory from "ldap-directory-manager";
import { camelCase } from "change-case";

export async function userGetAll(_: any, { criteria }: any, ctx: any) {
  const options = {
    user: process.env.AD_USER ?? "",
    pass: process.env.AD_Pass ?? "",
    ldapServerUrl: process.env.AD_URI ?? "",
    baseDN: "DC=ki,DC=local",
  };
  const client = new directory.Client(options);

  const data = await directory.userGetAll(criteria, {
    client,
    attributes: ["*"],
    baseDN: "DC=KI,DC=local",
  });

  // TODO: this should be a helper function and use it in return value of  all resolvers
  const transferredData = data.map((el) => {
    const transferredObject: any = {};
    for (const [key, value] of Object.entries(el)) {
      transferredObject[camelCase(key)] = value;
    }
    return transferredObject;
  }) as any;

  return transferredData;
}
