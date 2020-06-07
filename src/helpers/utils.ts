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

/**@description convert ldap 64-bit NT FILE TIME (time-interval) to js date
 * @note It’s the date/time value stored in Active Directory as the number of 100-nanosecond intervals that have elapsed since the 0 hours on January 1, 1601 (12:00 AM, January 1, 1601), until the date/time that is being stored. It’s always in UTC (Coordinated Universal Time, aka. GMT) and is often used in Properties like LastLogonTimeStamp, LastPwdSet, etc. [source of code with small changes](https://stackoverflow.com/questions/48224097/how-to-to-convert-from-ldap-time-format-to-js-date-format) */
export function ldapDateToJsDate(input: string) {
  if (input === "0" || input === "9223372036854775807") {
    /**@note: (source)[https://docs.microsoft.com/en-us/windows/win32/adschema/a-accountexpires]
     * - value 0 is acceptable and have different meaning base on attribute
     * - value '9223372036854775807' indicates that the account never expires.
     */
    return input;
  }
  if (input.length === 18) {
    return new Date(Number(input) / 1e4 - 1.16444736e13);
  }

  writeLog(`input ${input} is not valid! fallback to 1601-01-01T00:00:00`, {
    level: "warn",
    stdout: true,
  });
  /** fall-back for wrong formatted values */
  return new Date("1601-01-01T00:00:00");
}

/** transform data to be compatible with GraphQL schema.
 *
 * it does:
 * - make sure object property names are camelcase with no illegal characters
 * - change LDAP string Boolean to JS Boolean
 * - make sure values are always in arrays even when it's just a single string. it's because something like below is not possible in GraphQL schema.
 * @example
 * type A { field: String | [String] }
 */
export function transformData<T extends Record<string, unknown> = any>(
  obj: T,
): {
  [prop in Extract<keyof T, string>]: any[];
} {
  // TODO: fix generic input type, is not working
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
