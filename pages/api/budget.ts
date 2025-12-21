import nodemailer from "nodemailer"

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") return res.status(405).end()

  const { name, email, service, details } = req.body

  try {
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_TO,
      subject: `Presupuesto: ${service} - ${name}`,
      text: details
    })

    res.status(200).json({ success: true })
  } catch (err) {
    res.status(500).json({ error: "Error enviando email" })
  }
}
