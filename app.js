const express = require('express')
const app = express()
const path=require("path");
const ejs=require("ejs");
const{index} = require("./controller/auth/entrance")
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.resolve(__dirname,'public')));

const entranceRoute =require("./routes/entrance-route")
const homeRoute =require("./routes/home")


app.use("/entrance",entranceRoute)
app.use("/home",homeRoute)

app.get("/", index)
module.exports =app;

