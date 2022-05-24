require('dotenv').config();
const nodemailer = require('nodemailer');
let transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 25,
    secure: true,
    auth: {
        user: "a27c6902fa6f43",
        pass: "1e0bfe71527d54"
    }
})
const mailOptions = {
    from: "chintuchander96@gmail.com",
    to: "chanderboddupalli1997@gmail.com",
    subject: "Nodemailer",
    text: 'Hai Its Done Properly'
};

transport.sendMail(mailOptions, function(err, info) {
    if (err) {
        console.log(err);
    } else {
        console.log(info)
    }
});