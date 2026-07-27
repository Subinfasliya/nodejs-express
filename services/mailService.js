const { transporter } = require("../config/mailer")


const sendWelcomeMail = async(user)=>{
    const mailOptions = {
        from : `My Application ${process.env.EMAIL_USER}`,
        to : user.email,
        subject : 'Welcome To My Applicaiton',

        html :  `
            <h2> Hello ${user.name}</h2>
            <p>Your account has been created successfully</p>
        `
    }

    return transporter.sendMail(mailOptions)
}

module.exports = {
    sendWelcomeMail
}