const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes");
const connect = require("./databse/db");

app.use(routes);
app.use(express.json());

connect().then(() => {
  app.listen(port, () => {
    console.log(`Connected and listening on http://localhost:${port}`);
  });
});

//ANOTHER WAY TO CONNECT
// app.listen(port, () => {
//   connect();
//   console.log(`Connected and listening on http://localhost:${port}`);
// });
