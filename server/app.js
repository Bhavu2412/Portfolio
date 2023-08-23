const bodyParser = require('body-parser');
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());
app.post('/mail',(req,res,next)=>{
    const {name , message , email} = req.body;
    const transporter = nodemailer.createTransport({
        service : 'gmail',
        auth : {
            user : 'nodetutcomplete@gmail.com',
            pass : process.env.PASSWORD
        }
    })
    const mailOption = {
        from :'nodetutcomplete@gmail.com',
        to: 'patelbhavya2412@gmail.com',
        subject :'Portfolio-contact',
        html:`<div class="email" style="background-color: black;border: 2px solid black; border-radius: 20px;color: lightblue; display: flex; align-items: center;justify-content: center; flex-direction: column;font-size: 20px; width: 90vw; ">
            <h1>Hi there!</h1>
            <p>This is to inform you that ${name} is trying to contact you. Please find the Email and message below.</p>
            <p style="color: lightcoral;"> E-mail  : ${email}</p>
            <p style="color: lightcoral;">Message : ${message}</p>
            </div>`
    }
    transporter.sendMail(mailOption , (err,info)=>{
        if(err){
            console.log('An error occured'+err);
        }
    });
    console.log('message send!!!!')
    res.send({message:"send successfully"});
})

app.listen(8000);