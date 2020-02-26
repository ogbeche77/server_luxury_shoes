const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");

const app = express();

//Database configuration
const db = require("./config/key").MongoURI;

// Connect to Mongo
mongoose.connect(db, {useNewUrlParser: true})
.then(()=> console.log("MongoDB is still connected"))
.catch(err => console.log(err));




//EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

//add bodyparser
app.use(express.urlencoded ({ extended: false}));



//Routes
app.use("/", require("./routes/front"));
app.use("/users", require("./routes/users"));

const PORT = process.env.PORT || 5500;

app.listen(PORT, console.log(`Server has started on port ${PORT}`));