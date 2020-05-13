import { camelCase } from "change-case";
import { writeLog } from "fast-node-logger";

/** convert LDAP boolean "TRUE"/"FALSE" to js boolean */
export function ldapBooleanToJsBoolean(input: string): boolean {
  writeLog(`ldapBooleanToJsBoolean()`, { level: "trace" });
  if (input === "TRUE") {
    return true;
  }
  return false;
}

/** [source of code with small changes](https://stackoverflow.com/questions/48224097/how-to-to-convert-from-ldap-time-format-to-js-date-format) */
export function ldapDateToJsDate(input: string) {
  if (input.length === 18) {
    return new Date(Number(input) / 1e4 - 1.16444736e13);
  }
  return input;
}

/** transform data to be compatible with GraphQL schema.
 *
 * it does:
 * - make sure object property names are camelcase with no illegal characters
 * - change LDAP string Boolean to JS Boolean
 * - change LDAP string Date to JS Date (example of ldap date:  20190524202157.0Z & 132156337140137963 )
 * - make sure values are always in arrays even when it's just a single string. it's because something like below is not possible in GraphQL schema.
 * @example
 * type A { field: String | [String] }
 */
export function transformData<T extends {} = any>(
  obj: T,
): {
  [prop in Extract<keyof T, string>]: any[];
} {
  writeLog(`transformData()`, { level: "trace" });
  const transferredObject = {} as any;

  for (const [key, rawValue] of Object.entries(obj)) {
    const transferredKey = camelCase(key);

    /**@step make sure values are always in arrays */
    /** placeholder for arrayed values */
    const arrayedValue = Array.isArray(rawValue) ? rawValue : [rawValue];

    /**@step map LDAP types to JS types */
    /** placeholder for transferredValues */
    const transferredValues = arrayedValue.map((el) => {
      // convert items based on gqlType
      if (typeof el === "string" && (el === "TRUE" || el === "FALSE")) {
        return ldapBooleanToJsBoolean(el);
      }
      /** fall back to original types */
      return el;
    });

    /**@step make sure object property names are camelcase with no graphql illegal characters */
    transferredObject[transferredKey] = transferredValues;
  }
  return transferredObject;
}
