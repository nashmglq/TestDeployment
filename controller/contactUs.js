const express = require("express");
const app = express();
const path = require("path")
const sendMail = require("../utils/utils")

const getContactForm = (req,res) => {
    res.sendFile(path.join(__dirname, "../templates/contactPage.html"))
}


const postEmail = async (req,res)=>{
    console.log(req.body);

    const {email, subject, message} = req.body;

    if (!email || !subject || !message ){
        res.send("Error")
    }

    await sendMail( /// send to OWNER
        process.env.EMAIL, // to
        "New Contact", // subject
        `From: ${email}\nSubject: ${subject}\nMessage: ${message}`, // text
    )


    await sendMail(
        email,
        "Here is your Contact Receipt",
        `Thank you for Contacting Casita's\nSubject: ${subject}\nMessage: ${message}`

    )

    res.send("SENT")

}

module.exports = {getContactForm, postEmail}