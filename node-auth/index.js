const config = require("./config/config.json");
const mongoose = require("mongoose");
const http = require("http");
const PORT = 5000;
const DBConnection = config.database.mongodb.local;
const app = require("./app");
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log("server started at port :" + PORT);
  mongoose
    .connect(DBConnection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connection Created");
    })
    .catch((error) => {
      console.log("Error in Connecting with DB" + error);
    });
});
