import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import { DateScalar } from "./schema/custom-scalar";
import { Config } from "apollo-server";
import path from "path";

const schemaPath = path.join(process.cwd(), "generated", "graphql");

const typesArray = fileLoader(schemaPath, { ignoredExtensions: ["ts", "js"] });

export const typeDefs: Config["typeDefs"] = mergeTypes(
  [...typesArray, DateScalar],
  { all: true },
);
