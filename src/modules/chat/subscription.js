import { pubsub } from "../../server/pubsub.js";

export const chatSubscriptionResolvers = {
  userStatus: {
    subscribe: () => pubsub.asyncIterableIterator(["USER_ONLINE","USER_OFFLINE"]),
  },
};