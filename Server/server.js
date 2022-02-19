const express = require("express");
const mongose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./routes/routes");

const app = express();
app.use(bodyParser.json());
app.use('/',router)
mongose
  .connect("mongodb://localhost/shoppingCart", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("connection Done!"));


app.listen(5001, () => {
  console.log("running in port 5001");
});
