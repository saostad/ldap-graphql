import * as directory from "ldap-directory-manager";
import { transformData } from "../../../helpers/utils";
import { writeLog } from "fast-node-logger";
import { Context } from "../../../typings/general/context";

export async function userGetAll(
  _: any,
  { criteria }: any,
  { connectionInfo }: Context,
) {
  writeLog(`userGetAll()`, { level: "trace" });

  const client = new directory.Client(connectionInfo);

  const data = await directory.userGetAll(criteria, {
    client,
    attributes: ["*"],
    baseDN: connectionInfo.baseDN,
  });
  await client.unbind();

  const transferredData = data.map((el) => transformData(el));

  return transferredData;
}
