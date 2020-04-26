import path from "path";
import { fileLoader, mergeTypes } from "merge-graphql-schemas";

const dirPath = path.join(__dirname, "schema");

const typesArray = fileLoader(dirPath, { ignoredExtensions: ["ts", "js"] });

export const typeDefs = mergeTypes(typesArray, { all: true });
