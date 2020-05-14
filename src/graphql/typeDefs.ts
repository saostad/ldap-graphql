import path from "path";
import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import { DateScalar } from "./schema/custom-scalar";
import { Config } from "apollo-server";

const dirPath = path.join(__dirname, "schema", "generated");

const typesArray = fileLoader(dirPath, { ignoredExtensions: ["ts", "js"] });

export const typeDefs: Config["typeDefs"] = mergeTypes(
  [...typesArray, DateScalar],
  { all: true },
);
