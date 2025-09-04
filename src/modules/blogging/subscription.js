import { pubsub } from "../../server/pubsub.js";

export const blogSubscriptionResolver ={
    addComment : {
    subscribe: () => pubsub.asyncIterableIterator(["NEW_COMMENT_CREATED"])
  }
}