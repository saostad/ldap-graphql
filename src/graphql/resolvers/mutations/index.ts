import * as user from "./user";
import * as entry from "./entry";

export const mutations = {
  Mutation: { ...user, ...entry },
};
