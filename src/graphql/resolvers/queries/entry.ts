import { GraphqlContext } from "../../../typings/general/context";
import * as directory from "ldap-directory-manager";
import { transformData } from "../../../helpers/utils";
import { writeLog } from "fast-node-logger";

export async function entryGetByDn(
  _: any,
  { dn }: { dn: string },
  { connectionInfo }: GraphqlContext,
) {
  writeLog(`entryGetByDn()`, { level: "trace" });
  const client = new directory.Client(connectionInfo);
  try {
    const data = await directory.entryGetByDn(dn, {
      client,
      attributes: ["*"],
    });

    return transformData(data);
  } finally {
    client.unbind();
  }
}
