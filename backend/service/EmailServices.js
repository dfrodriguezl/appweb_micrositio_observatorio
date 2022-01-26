const nodemailer = require("nodemailer")

class EmailService {
  static async sendEmail({email,contenido,subject}) {
    // Definimos el transporter
    var transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "noreplytestsendemail@gmail.com",
        pass: "dane2021+",
      },
    });
    // Definimos el email
    var mailOptions = {
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
