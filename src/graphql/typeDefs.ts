import { mergeTypeDefs } from "@graphql-tools/merge";
import { loadFiles } from "@graphql-tools/load-files";

import { Config } from "apollo-server";
import {
  generatedSchemaPath,
  userDefinedSchemaDefaultPath,
  customSchemaPath,
} from "../helpers/variables";

type GetTypeFnInput = {
  /**@default path.join(process.cwd(),"customizations","schema"); */
  customSchemaPath?: string;
  loadFilesOptions?: Parameters<typeof loadFiles>[1];
};
export async function getTypes(options?: GetTypeFnInput) {
  let userDefinedSchemaPath = userDefinedSchemaDefaultPath;
  if (options?.customSchemaPath) {
    userDefinedSchemaPath = options?.customSchemaPath;
  }

  let userDefinedSchemaLoaderOptions: Parameters<typeof loadFiles>[1] = {
    recursive: true,
  };
  if (options?.loadFilesOptions) {
    userDefinedSchemaLoaderOptions = options.loadFilesOptions;
  }

  const generatedSchema = await loadFiles(generatedSchemaPath, {
    ignoredExtensions: ["ts", "js"],
    recursive: true,
  });

  const customSchema = await loadFiles(customSchemaPath, {
    recursive: true,
  });

  const userDefinedSchema = await loadFiles(
    userDefinedSchemaPath,
    userDefinedSchemaLoaderOptions,
  );

  const typeDefs: Config["typeDefs"] = mergeTypeDefs([
    ...generatedSchema,
    ...customSchema,
    ...userDefinedSchema,
  ]);

  return typeDefs;
}
