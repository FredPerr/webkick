import { NextApiRequest, NextApiResponse } from 'next'

export default async (req, res) => {
  const { token } = req.body

  await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SERVER_KEY}&response=${token}`,
  )

  if (res.status == 200) {
    res.status(200).json({ message: 'Captcha passed' })
  } else {
    res.status(400).json({ message: 'Captcha failed' })
  }
}
