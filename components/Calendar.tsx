"use client"

import { useState } from "react"
import { format } from "date-fns"

export default function Calendar() {
  const [dates, setDates] = useState<string[]>([])

  function addDate() {
    setDates([...dates, format(new Date(), "yyyy-MM-dd HH:mm")])
  }

  return (
    <>
      <h2>Reservas</h2>
      <button onClick={addDate}>Añadir reserva</button>
      <ul>
        {dates.map((d, i) => <li key={i}>{d}</li>)}
      </ul>
    </>
  )
}
