import nodemailer from "nodemailer"
import { NextResponse } from "next/server"
import OpenAI from "openai"

export async function POST(req: Request) {
  const data = await req.json()

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  })

  const ai = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "Redacta una respuesta profesional para un parque acuático premium."
      },
      {
        role: "user",
        content: data.message
      }
    ]
  })

  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  })

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: "Nuevo contacto AQUAZONE",
    text: `
Nombre: ${data.name}
Email: ${data.email}

Mensaje original:
${data.message}

Sugerencia IA:
${ai.choices[0].message.content}
`
  })

  return NextResponse.json({ ok: true })
}
