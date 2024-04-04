const server = require("./app");

const connectDB = require("./connection/db");

connectDB();

server.listen(3000, () => {
  console.log("server connected");
});
