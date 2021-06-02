const express = require("express");
const AWS = require("aws-sdk");
const config = require("./config");
const app = express();
const PORT = 8080;

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

app.listen(PORT, () => {
  console.log("app is listening to port " + PORT);
});
