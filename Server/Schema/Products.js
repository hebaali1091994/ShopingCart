const mogoose=require('mongoose')

const productSchema= new mogoose.Schema(

{
    id: String,
    title: String,
    imgUrl: String,
    desc: String,
    size: { String },
    price: Number,
}
)
module.exports=productSchema