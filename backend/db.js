const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://khanlucky2020:yKAnXEZOJqZDRacW@cluster0.xjjyy1w.mongodb.net/paymentsapp");


const userSchema=mongoose.Schema({
   username:String,
   password:String,
   firstName:String,
   lastName:String

})

const User =mongoose.model('payments',userSchema);
module.exports={
    User
}