import * as directory from "ldap-directory-manager";
import { writeLog } from "fast-node-logger";
import {
  MutationResolvers,
  MutationEntryCountryUpdateArgs,
} from "../../../typings/generated/types";
import { transformData } from "../../../helpers/utils";

/**@note to update a country value in Active Directory requires you to update three different attributes at the same time: the countryCode, c and co attributes. you must update two of the values, countryCode and c, using the appropriate integral and string ISO 3166 country code values or the update will fail.
- countryCode (Country-Code): ISO-3166 Integer value
- c (Country-Name): ISO-3166 2-digit string value
- co (Text-Country): Open string value 
*/
export const entryCountryUpdate: Exclude<
  MutationResolvers["entryCountryUpdate"],
  undefined
> = async (_: any, { input }, { connectionInfo }) => {
  writeLog(`entryCountryUpdate()`, { level: "trace" });
  const client = new directory.Client(connectionInfo);

  try {
    const attributesToUpdate: MutationEntryCountryUpdateArgs["input"] = {
      ...input,
    };
    delete attributesToUpdate.dn;

    /**@step this is to delete existing values if value is 'null' */
    // TODO: to delete an existing value it should set to 0
    Object.entries(input).forEach(([prop, value]) => {
      if (value === null) {
        // @ts-expect-error
        attributesToUpdate[prop] = [];
      }
    });

    const data = await directory.entryCountryUpdate({
      dn: input.dn,
      client,
      data: attributesToUpdate,
    });

    const transferredData = transformData(data);
    // TODO: this is temporary solution for type problem
    return transferredData as any;
  } finally {
    client.unbind();
  }
};
