import * as directory from "ldap-directory-manager";
import { transformData } from "../../../helpers/utils";
import { writeLog } from "fast-node-logger";
import { QueryResolvers } from "../../../typings/generated/types";

export const userGetAll: QueryResolvers["userGetAll"] = async (
  _,
  { criteria },
  { connectionInfo },
) => {
  writeLog(`userGetAll()`, { level: "trace" });
  const client = new directory.Client(connectionInfo);
  try {
    const data = await directory.userGetAll({
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

export const userGetByUserName: QueryResolvers["userGetByUserName"] = async (
  _,
  { userName },
  { connectionInfo },
) => {
  writeLog(`userGetAll()`, { level: "trace" });
  const client = new directory.Client(connectionInfo);
  try {
    const data = await directory.userGetByUserName(userName, {
      client,
      attributes: ["*"],
    });

    const transferredData = data.map((el) => transformData(el));

    return transferredData;
  } finally {
    client.unbind();
  }
};

export const userGetByName: QueryResolvers["userGetByName"] = async (
  _,
  { cn },
  { connectionInfo },
) => {
  writeLog(`userGetByName()`, { level: "trace" });
  const client = new directory.Client(connectionInfo);
  try {
    const data = await directory.userGetByName(cn, {
      client,
      attributes: ["*"],
    });

    const transferredData = data.map((el) => transformData(el));

    return transferredData;
  } finally {
    client.unbind();
  }
};

export const userGetByNameApproxMatch: QueryResolvers["userGetByNameApproxMatch"] = async (
  _,
  { cn },
  { connectionInfo },
) => {
  writeLog(`userGetByNameApproxMatch()`, { level: "trace" });
  const client = new directory.Client(connectionInfo);
  try {
    const data = await directory.userGetByNameApproxMatch(cn, {
      client,
      attributes: ["*"],
    });

    const transferredData = data.map((el) => transformData(el));

    return transferredData;
  } finally {
    client.unbind();
  }
};
