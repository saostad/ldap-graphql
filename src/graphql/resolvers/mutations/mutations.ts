import * as directory from "ldap-directory-manager";
import type {
  MutationResolvers,
  MutationUserUpdateArgs,
} from "../../../typings/generated/types";
import { transformData } from "../../../helpers/utils";

// userUpdate(input: UserUpdateInput!): User
export const userUpdate: MutationResolvers["userUpdate"] = async (
  _,
  { input },
  { connectionInfo },
) => {
  const client = new directory.Client(connectionInfo);
  try {
    const data = await directory.userUpdate<MutationUserUpdateArgs["input"]>({
      client,
      dn: input.dn,
      changes: [
        {
          modification: {
            ...input,
          },
          operation: "replace",
        },
      ],
    });
    console.log(`File: mutations.ts,`, `Line: 30 => `, input.dn, data);

    const transferredData = transformData(data);
    return transferredData;
  } finally {
    await client.unbind();
  }
};
