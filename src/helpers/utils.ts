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

/** transform data to be compatible with GraphQL schema.
 *
 * it does:
 * - make sure object property names are camelcase with no illegal characters
 * - change LDAP Boolean to JS Boolean
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
    let value = rawValue;

    /**@step change LDAP Boolean to JS Boolean */
    if (
      (typeof rawValue === "string" && rawValue === "TRUE") ||
      rawValue === "FALSE"
    ) {
      value = ldapBooleanToJsBoolean(rawValue);
    }

    /**@step make sure values are always in arrays */
    /** placeholder for transferred values */
    const arrayedValue = Array.isArray(value) ? value : [value];

    /**@step make sure object property names are camelcase with no illegal characters */
    transferredObject[camelCase(key)] = arrayedValue;
  }
  return transferredObject;
}
