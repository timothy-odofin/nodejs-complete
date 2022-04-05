const express = require('express')
const router = express.Router()
const{login, signup, processLogin} = require("./../controller/auth/entrance")
router.get("/login",login);
router.post("/login",processLogin);

router.get("/signup", signup);



module.exports =router;