import { PubSubManager } from "./pubsub";

setInterval(() => {
  PubSubManager.getInstance().userSubscribe(Math.random().toString(), "AAPL");
}, 5000);
