const express = require("express");
const mongose = require("mongoose");
const bodyParser = require("body-parser");
const productRouter = require("./routes/routes");
const orderRouter=require("./routes/order");
const runDb = require("./config/db");
const app = express();
app.use(bodyParser.json());
app.use('/',productRouter)
app.use('/',orderRouter)
runDb()

app.listen(5001, () => {
  console.log("running in port 5001");
});
