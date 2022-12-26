const mongoose = require("mongoose");
const validator = require("validator");


const userSchema = mongoose.Schema({
    name: {
        type: "String", requires: true
    },
    email:
    {
        type: "String",
        requires: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new error("invalid mail id ");
            }
        }
    },
    address: {
        type: "String",
        requires: true
    },
    phone: {
        type: "Number",
        requires: true,
        min: 10
    },
    message: {
        type: "String"
    },
    date:{
        type:Date,
        default:Date.now
    }
}) 

const User=mongoose.model("User", userSchema); 
module.exports=User;