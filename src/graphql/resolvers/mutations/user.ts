import * as directory from "ldap-directory-manager";
import type {
  MutationResolvers,
  MutationUserUpdateArgs,
} from "../../../typings/generated/types";
import { transformData } from "../../../helpers/utils";

/**@help:
 * - [section 4.6 of rfc2251.txt](https://www.ietf.org/rfc/rfc2251.html#section-4.6)
 * - Replace: Creates the attribute if necessary, and replaces all existing values of the attribute with the specified values. If you wish to keep any existing values of a multi-valued attribute, you must include these values in the replace operation. A replace operation with no value will remove the entire attribute if it exists, and is ignored if the attribute does not exist.
 * - Add two description attributes
    @example 
    dn: uid=user.0,ou=people,dc=example,dc=com
    changetype: modify
    add: description
    description: description 1
    -
    description: description 2
    ```
 * - Replace one of the values of the multi-valued attribute
    @example 
    dn: uid=user.0,ou=people,dc=example,dc=com
    changetype: modify
    delete: description
    description: description 1
    -
    add: description
    description: description 3
    ```
 * - Delete All Values of a Multi-valued Attribute
    @example 
    dn: uid=user.0,ou=people,dc=example,dc=com
    changetype: modify
    delete: description
    ```
 * - Delete Selected Values of a Multi-valued Attribute
    @example 
    dn: uid=user.0,ou=people,dc=example,dc=com
    changetype: modify
    delete: description
    description: value 1
    description: value 2
    ```
 */
export const userUpdate: Exclude<
  MutationResolvers["userUpdate"],
  undefined
> = async (_, { input }, { connectionInfo }) => {
  const client = new directory.Client(connectionInfo);
  try {
    const attributesToUpdate: any = { ...input };
    delete attributesToUpdate.dn;

    /**@step this is to delete existing values if value is 'null' or empty string */
    Object.entries(input).forEach(([prop, value]) => {
      if (
        value === null ||
        value === "" ||
        (Array.isArray(value) && value[0] === "")
      ) {
        attributesToUpdate[prop] = [];
      }
    });

    const data = await directory.entryUpdate<MutationUserUpdateArgs["input"]>(
      input.dn,
      {
        client,
        changes: [
          {
            operation: "replace",
            modification: {
              ...attributesToUpdate,
            },
          },
        ],
      },
    );

    const transferredData = transformData(data);
    return transferredData;
  } finally {
    client.unbind();
  }
};
