//create schema for all field needed by the users
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: True

    },
    email:{
        type: String,
        required: True

    },
    password:{
        type: String,
        required: True

    },
    date:{
        type: Date,
        default: Date.now

    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;