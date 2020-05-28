import { GraphQLScalarType } from "graphql";
import { Kind } from "graphql/language";
import { ldapDateToJsDate } from "../../../helpers/utils";

export const customScalar = {
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    parseValue(value) {
      return new Date(value); // value from the client
    },
    /** change LDAP string Date to JS Date (example of ldap date:  20190524202157.0Z & 132156337140137963 ) */
    serialize(value: string) {
      /** @step check if input came as format "yyyyMMddkkmmss.0Z" */
      if (value.includes("Z")) {
        const year = Number(value.slice(0, 4));
        const month = Number(value.slice(4, 6));
        const day = Number(value.slice(6, 8));
        const hour = Number(value.slice(8, 10));
        const minutes = Number(value.slice(10, 12));
        const seconds = Number(value.slice(12, 14));
        const result = new Date(year, month, day, hour, minutes, seconds);

        return result; // value sent to the client
      } else {
        /**@step input came as forma Long-Integer (64-bit NT FILE TIME time-interval) */
        return ldapDateToJsDate(value); // value sent to the client
      }
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(+ast.value); // ast value is always in string format
      }
      return null;
    },
  }),
};
