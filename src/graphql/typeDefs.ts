import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import { Config } from "apollo-server";
import { schemaPath } from "../helpers/variables";

const typesArray = fileLoader(schemaPath, {
  ignoredExtensions: ["ts", "js"],
  recursive: true,
});

export const typeDefs: Config["typeDefs"] = mergeTypes(typesArray, {
  all: true,
});
