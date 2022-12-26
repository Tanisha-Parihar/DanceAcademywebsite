const mongoose=require("mongoose");
mongoose.set('strictQuery', true);

mongoose.connect("mongodb://localhost:27017/Danceentry",{

}).then(()=>{
    console.log("connection is successful");
}).catch((e)=>{
    console.log("no connection");
});

