import "@babel/polyfill";
import app from "./server";
import { connect } from "./database";

const main = async () => {
  await app.listen(app.get("port"));
  await connect();
  console.log("Server on Port:", app.get("port"));
};

main();
