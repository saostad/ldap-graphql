import { GraphqlContext } from "../../../typings/general/context";
import * as directory from "ldap-directory-manager";
import { transformData } from "../../../helpers/utils";

export async function entryGetByDn(
  _: any,
  { dn }: { dn: string },
  { connectionInfo }: GraphqlContext,
) {
  const client = new directory.Client(connectionInfo);
  const data = await directory.entryGetByDn(dn, { client, attributes: ["*"] });
  return transformData(data);
}
