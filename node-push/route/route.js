const express = require("express");
const route = express.Router()
const {getContactForm, postEmail} = require("../controller/contactUs")


route.get("/", getContactForm)

route.post("/", postEmail)


module.exports = route // lol forgot this