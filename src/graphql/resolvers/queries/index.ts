import * as user from "./user";
import * as common from "./common";

export const queries = {
  Query: {
    ...common,
    ...user,
  },
};
