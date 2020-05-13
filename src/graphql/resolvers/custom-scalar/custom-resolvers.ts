import { GraphQLScalarType } from "graphql";
import { Kind } from "graphql/language";
import { ldapDateToJsDate } from "../../../helpers/utils";
import { parse } from "date-fns";

export const resolverMap = {
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value: string) {
      if (value.includes("Z")) {
        // to remove '.0Z' at the end of all values
        const trimmedValue = value.slice(0, -3);
        return parse(trimmedValue, "yyyyMMddkkmmss", new Date()); // value sent to the client
      } else {
        return ldapDateToJsDate(value);
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
