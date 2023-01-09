const nodemailer = require('nodemailer')

export default async (req, res) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: process.env.SMTP_ADDRESS,
            pass: process.env.SMTP_PASSWORD,
        },
    })

    transporter.verify().then(console.log).catch(console.error)

    transporter
        .sendMail({
            from: `"${req.body.name}" <${req.body.email}>`,
            to: `webkick.agency@gmail.com, ${req.body.email}`,
            subject: `Demande de soumission [${req.body.company}] demandé par ${req.body.name}`,
            text: `${req.body.msg}`,
            html: `<u>Nous vous recontacterons dans de bref délai. Assurez-vous de vérifier votre boîte courriel. Il est possible que nous vous contactions par téléphone au ${req.body.phone} !</u> <br/> <b>Cordialement, WebKick CA</b>`, // html body
        })
        .then((info) => {
            console.log({ info })
        })
        .catch(console.error)
    res.status(200).json({ message: 'Email sent', msg: req.body.msg })
}
