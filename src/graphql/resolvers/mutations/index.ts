import * as user from "./user";
import * as adEntry from "./ad-entry";

export const mutations = {
  Mutation: { ...user, ...adEntry },
};
