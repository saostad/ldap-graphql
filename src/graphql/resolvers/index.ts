import * as queries from "./queries";
import * as mutations from "./mutations";
import { resolverMap } from "./custom-scalar/custom-resolvers";
import { Config } from "apollo-server";

export const resolvers: Config["resolvers"] = {
  ...resolverMap,
  Query: { ...queries },
  Mutation: { ...mutations },
};
