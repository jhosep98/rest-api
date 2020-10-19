import "@babel/polyfill";
import app from "./server";

const main = async () => {
  await app.listen(app.get("port"));
  console.log("Server on Port:", app.get("port"));
};

main();
