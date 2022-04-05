const express = require('express')
const router = express.Router()
const{home} = require("./../controller/auth/entrance")
router.get("/", home);
module.exports=router




