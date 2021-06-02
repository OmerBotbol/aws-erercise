const express = require("express");
const AWS = require("aws-sdk");
const config = require("./config");
const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/shopping-items", (req, res) => {
  AWS.config.update(config.aws_remote_config);
  const docClient = new AWS.DynamoDB.DocumentClient();

  const params = {
    TableName: config.aws_table_name,
  };

  docClient.scan(params, function (err, data) {
    if (err) {
      console.log(err);
      res.send({
        success: false,
        message: err,
      });
    } else {
      const { Items } = data;
      res.send(Items);
    }
  });
});

app.post("/submit", (req, res) => {
  AWS.config.update(config.aws_remote_config);
  const docClient = new AWS.DynamoDB.DocumentClient();
  const Item = { ...req.body };
  const params = {
    TableName: "Orders",
    Item: Item,
  };

  docClient.put(params, function (err, data) {
    if (err) {
      res.send({
        success: false,
        message: err,
      });
    } else {
      res.send({
        success: true,
        message: "Order Received",
      });
    }
  });
});

app.listen(PORT, () => {
  console.log("app is listening to port " + PORT);
});
