import type { Config } from "apollo-server-express";
import * as queries from "./queries";
import { resolverMap } from "./custom-scalar/custom-resolvers";

export const resolvers: Config["resolvers"] = {
  Query: { ...queries },
  ...resolverMap,
};
