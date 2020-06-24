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

/** 
  based on criteria return not disabled users respecting userAccountControl flags
  */
export const userGetDisabled: QueryResolvers["userGetDisabled"] = async (
  _,
  { criteria },
  { connectionInfo },
) => {
  writeLog(`userGetDisabled()`, { level: "trace" });
  const client = new directory.Client(connectionInfo);
  try {
    const data = await directory.userGetDisabled({
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
/**
  based on criteria return not disabled users respecting userAccountControl flags
  */
export const userGetNotDisabled: QueryResolvers["userGetNotDisabled"] = async (
  _,
  { criteria },
  { connectionInfo },
) => {
  writeLog(`userGetNotDisabled()`, { level: "trace" });
  const client = new directory.Client(connectionInfo);
  try {
    const data = await directory.userGetNotDisabled({
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
/**
  based on criteria return user that are Locked Out
  */
export const userGetLockedOut: QueryResolvers["userGetLockedOut"] = async (
  _,
  { criteria },
  { connectionInfo },
) => {
  writeLog(`userGetLockedOut()`, { level: "trace" });
  const client = new directory.Client(connectionInfo);
  try {
    const data = await directory.userGetLockedOut({
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

/**
  based on criteria return user accounts required a home directory respecting userAccountControl flags
  */
export const userGetHomedirRequired: QueryResolvers["userGetHomedirRequired"] = async (
  _,
  { criteria },
  { connectionInfo },
) => {
  writeLog(`userGetHomedirRequired()`, { level: "trace" });
  const client = new directory.Client(connectionInfo);
  try {
    const data = await directory.userGetHomedirRequired({
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
/**
  based on criteria return not password never expire users respecting userAccountControl flags
  */
export const userGetPasswordNeverExpires: QueryResolvers["userGetPasswordNeverExpires"] = async (
  _,
  { criteria },
  { connectionInfo },
) => {
  writeLog(`userGetPasswordNeverExpires()`, { level: "trace" });
  const client = new directory.Client(connectionInfo);
  try {
    const data = await directory.userGetPasswordNeverExpires({
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
/**
  based on criteria return not password not required users respecting userAccountControl flags
  */
export const userGetPasswordNotRequired: QueryResolvers["userGetPasswordNotRequired"] = async (
  _,
  { criteria },
  { connectionInfo },
) => {
  writeLog(`userGetPasswordNotRequired()`, { level: "trace" });
  const client = new directory.Client(connectionInfo);
  try {
    const data = await directory.userGetPasswordNotRequired({
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
/**
  based on criteria return user accounts respecting multiple userAccountControl flags
  */
export const userGetByUserAccountControl: QueryResolvers["userGetByUserAccountControl"] = async (
  _,
  { criteria, accountControls },
  { connectionInfo },
) => {
  writeLog(`userGetByUserAccountControl()`, { level: "trace" });
  const client = new directory.Client(connectionInfo);

  try {
    const data = await directory.userGetByUserAccountControl({
      criteria: criteria ?? undefined,
      // TODO: fix the typing problem and remove "any"
      accountControls: accountControls as any,
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
