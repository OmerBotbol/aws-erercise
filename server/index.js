const express = require("express");
const app = express();
const PORT = 8080;

app.get("/test", (req, res) => {
  res.send("test success");
});

app.listen(PORT, () => {
  console.log("app is listening to port " + PORT);
});
