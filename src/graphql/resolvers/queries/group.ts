import { writeLog } from "fast-node-logger";
import { QueryResolvers } from "../../../typings/generated/types";
import * as directory from "ldap-directory-manager";
import { transformData } from "../../../helpers/utils";

export const groupGetAll: QueryResolvers["groupGetAll"] = async (
  _,
  { criteria },
  { connectionInfo },
) => {
  writeLog(`userGetAll()`, { level: "trace" });
  const client = new directory.Client(connectionInfo);
  try {
    const data = await directory.groupGetAll({
      criteria: criteria ?? undefined,
      configs: {
        client,
        attributes: ["*"],
      },
    });

    const transferredData = data.map((el) => transformData(el));

    return transferredData;
  } finally {
    client.unbind();
  }
};

export const groupGetByDn: QueryResolvers["groupGetByDn"] = async (
  _,
  { dn },
  { connectionInfo },
) => {
  writeLog(`groupGetByDn()`, { level: "trace" });
  const client = new directory.Client(connectionInfo);
  try {
    const data = await directory.entryGetByDn(dn, {
      client,
      attributes: ["*"],
    });

    const transferredData = transformData(data);

    return transferredData;
  } finally {
    client.unbind();
  }
};
