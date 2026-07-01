const express = require("express");

const PORT = 5000;

const app = express();

app.get("/",(req,res) => {
    res.send("Home Page")
})

app.get("/about-us",(req,res) => {
    res.send("About Page")
})

app.get("/contact-us",(req,res) => {
    res.send("Contact Page")
})

app.listen(PORT,()=> {
    console.log("Server Running...");
})

