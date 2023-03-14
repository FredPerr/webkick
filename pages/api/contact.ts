import type { NextApiRequest, NextApiResponse } from 'next'
const nodemailer = require('nodemailer')

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: process.env.SMTP_ADDRESS,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  transporter.verify().then().catch(console.error)

  transporter
    .sendMail({
      from: `"WebKick" <${req.body.email}>`,
      to: `webkick.agency@gmail.com, ${req.body.email}`,
      subject: `Message [${req.body.company}] envoyé par ${req.body.name}`,
      text: `${req.body.msg}`,
      html: `
        Merci d'avoir pris le temps de nous contacter. Nous vous répondrons dans les plus brefs délais. <br/>
        Votre message: <br/>
                Nom: ${req.body.name} <br/>
                Email: ${req.body.email} <br/>
                Téléphone: ${req.body.tel} <br/>
                Entreprise représentée: ${req.body.company} <br/>
                Message: <p>${req.body.message}</p> <br/>
            `,
    })

    .catch((err: any) => {
      res.status(400).json({
        message: "Une erreur est survenu durant l'envoie du courriel",
        err,
      })
    })
  res.status(200).json({ message: 'Email envoyé avec succès!' })
}
