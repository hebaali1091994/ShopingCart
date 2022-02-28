const mongoose=require("mongoose")

function runDb(){
    mongoose.connect("mongodb://localhost/shoppingCart", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((res) => console.log("connection Done!"));
      
}
module.exports=runDb