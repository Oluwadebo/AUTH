const nodemailer = require('nodemailer')

const sendmail = async (emails) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.email",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.MAIL_PASSWORD
        }
    })

    let info = await transporter.sendMail({
        from: process.env.EMAIL,
        to: emails,
        subject: "Hello ✔",
        // text: "Hello world?",
        html: "<b>Hello world?</b>", 
    });

    console.log(info);
}

module.exports = { sendmail }