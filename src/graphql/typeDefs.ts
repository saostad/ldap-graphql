import path from "path";
import { fileLoader, mergeTypes } from "merge-graphql-schemas";
import { DateScalar } from "./schema/custom-scalar";

const dirPath = path.join(__dirname, "schema", "generated");

const typesArray = fileLoader(dirPath, { ignoredExtensions: ["ts", "js"] });

export const typeDefs = mergeTypes([...typesArray, DateScalar], { all: true });
