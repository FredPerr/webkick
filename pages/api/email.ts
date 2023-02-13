import type { NextApiRequest, NextApiResponse } from 'next'
const nodemailer = require('nodemailer')
const fs = require('fs')

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
  const template = fs.readFileSync(
    './public/email/contact-website.html',
    'utf8',
  )

  transporter
    .sendMail({
      from: `"${req.body.name}" <${req.body.email}>`,
      to: `webkick.agency@gmail.com, ${req.body.email}`,
      subject: `Demande de soumission [${req.body.company}] demandé par ${req.body.name}`,
      text: `${req.body.msg}`,
      html: template.replace(
        '<br/>{#0#}',
        `
                <b>Nom:<b/> ${req.body.name} <br/>
                <b>Entrprise représentée:<b/> ${req.body.company} <br/>
                <b>Email:<b/> ${req.body.email} <br/>
                <b># Téléphone:<b/> ${req.body.phone} <br/>
                <b>Message:<b/> <p>${req.body.msg}</p> <br/>
            `,
      ),
    })

    .catch((err: any) => {
      res.status(400).json({ message: 'Email not sent', err })
    })
  res.status(200).json({ message: 'Email sent successfully!' })
}
