// All routes should be structured as follows
import { nexuRouter, sendMsg } from "nexujs";

const HelloRoutes = nexuRouter;

HelloRoutes.get("/", (req, res, next) => {
  // Try Changing this to `res.json`
  res.send("Hi 👋, Welcome to the Nexu.");
  console.log(sendMsg().log);
});

export = HelloRoutes;
