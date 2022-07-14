import * as user from "./user";
import * as entry from "./entry";
import * as group from "./group";

export const queries = {
  Query: {
    ...entry,
    ...user,
    ...group,
  },
};
