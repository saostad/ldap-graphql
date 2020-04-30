import { config } from "dotenv";
config();
import * as directory from "ldap-directory-manager";
import { transformData } from "../../../helpers/utils";
import { writeLog } from "fast-node-logger";

export async function userGetAll(_: any, { criteria }: any, ctx: any) {
  writeLog(`userGetAll()`, { level: "trace" });
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
  await client.unbind();

  const transferredData = data.map((el) => transformData(el));

  return transferredData;
}
