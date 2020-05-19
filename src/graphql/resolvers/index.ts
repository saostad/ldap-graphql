import type { Config } from "apollo-server";
import * as queries from "./queries";
import * as mutations from "./mutations";
import { resolverMap } from "./custom-scalar/custom-resolvers";

export const resolvers: Config["resolvers"] = {
  ...resolverMap,
  Query: { ...queries },
  Mutation: { ...mutations },
};
