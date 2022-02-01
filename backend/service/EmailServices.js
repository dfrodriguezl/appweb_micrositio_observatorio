const nodemailer = require("nodemailer")

class EmailService {
  static async sendEmail({email,contenido,subject}) {
    // Definimos el transporter
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure : true,
      auth: {
        user: "noreplytestsendemail@gmail.com",
        pass: "dane2021+",
      },   
      tls: {
        rejectUnauthorized: false
      }   
    });

    transporter.verify().then(()=>{
      console.log('ready for send emails');
    })

    // Definimos el email noreplytestsendemail@gmail.com dane2021+
    let mailOptions = {
      from: "",
      to: email,
      subject: subject,
      html: contenido,
    };
    // Enviamos el email
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("Ocurrio un problema "+error)
        return false
      } else {
          console.log("Email Enviado")
          return true
      }
    });
  }
}
module.exports = EmailService
