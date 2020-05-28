import * as user from "./user";
import * as entry from "./entry";

export const queries = {
  Query: {
    ...entry,
    ...user,
  },
};
