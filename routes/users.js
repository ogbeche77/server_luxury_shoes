const express = require("express");
const router = express.Router();

//Mongoose works when we create models & call methods on that model
const User = require("../models/User"); //.. means we go ouside routes folder


//Login Page
router.get("/login", (req, res) => res.render ("login"));

//Registration Page
router.get("/register", (req, res) => res.render ("register"));

//Registration handle, after user click register
router.post("/register", (req, res) => {
   const { name, email, password, password2 } = req.body;
   let errors =[];

   //check required fields
   if(!name || !email || !password || !password2) {
       error.push({ msg: "Please fill all fields"});    
   }

// Check if password match
if(password !==password2) {
    errors.push({ msg: "Password doesn't match"});
}

//check password length
if(password.length < 7 ){
    errors.push({ msg: "Password should have at least 7 characters"});

}

//if there is an error, form should be rendered again
if(errors.length > 0){
res.render("register", {
    errors,
    name,
    email,
    password,
    password2

});
}else {
    //To validate user

}

});
module.exports = router;