const nodemailer=require("nodemailer");
require("dotenv").config;
const path=require("path");

const transporter = nodemailer.createTransport({
    service:'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: process.env.USER,
      pass: process.env.APP_PASSWORD, //App password from gmail account
    },
  });

  const mailOptions={
    from: {
        name: "Web Wizard",
        address: process.env.USER
    }, // sender address
    to: ["vt1733620@gmail.com"], // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
    attachments:[
        {
            filename:'photo.jpg',
            path: path.join(__dirname,'photo.jpg'),
            contentType:'photo/jpg'
        },
    ]
};

const sendMail= async(transporter,mailOptions)=>{
    try{
        await transporter.sendMail(mailOptions);
        console.log('Email has been sent!');
    }
    catch(error){
        console.error(error);
    }
}

sendMail(transporter,mailOptions);