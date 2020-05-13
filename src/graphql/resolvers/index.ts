import type { Config } from "apollo-server-express";
import * as queries from "./queries";

export const resolvers: Config["resolvers"] = {
  Query: { ...queries },
};
