import { config } from "dotenv";
config();
import * as directory from "ldap-directory-manager";

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

  return data as any;
}
