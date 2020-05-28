import { queries } from "./queries";
import { mutations } from "./mutations";
import { customScalar } from "./custom-scalar/custom-scalar";
import { Config } from "apollo-server";
import { mergeResolvers } from "@graphql-tools/merge";
import { loadFiles } from "@graphql-tools/load-files";
import { userDefinedResolversDefaultPath } from "../../helpers/variables";

type GetResolversFnInput = {
  /**@default path.join(process.cwd(),"customizations","resolvers"); */
  customResolversPath?: string;
  loadFilesOptions?: Parameters<typeof loadFiles>[1];
};
export async function getResolvers(options?: GetResolversFnInput) {
  let userDefinedResolversPath = userDefinedResolversDefaultPath;
  if (options?.customResolversPath) {
    userDefinedResolversPath = options?.customResolversPath;
  }

  let userDefinedResolverLoaderOptions: Parameters<typeof loadFiles>[1] = {
    recursive: true,
  };
  if (options?.loadFilesOptions) {
    userDefinedResolverLoaderOptions = options.loadFilesOptions;
  }

  const userDefinedResolvers = await loadFiles(
    userDefinedResolversPath,
    userDefinedResolverLoaderOptions,
  );

  const resolvers: Config["resolvers"] = mergeResolvers([
    customScalar,
    queries,
    mutations,
    ...userDefinedResolvers,
  ]);
  return resolvers;
}
