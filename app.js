const express = require("express");
const expressLayouts = require("express-ejs-layouts");


const app = express();

//EJS
app.use(expressLayouts);
app.set("view engine", "ejs");



//Routes
app.use("/", require("./routes/front"));
app.use("/users", require("./routes/users"));

const PORT = process.env.PORT || 5500;

app.listen(PORT, console.log(`Server has started on port ${PORT}`));