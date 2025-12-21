"use client"

import { format, addDays } from "date-fns"

export default function Calendar() {
  const days = Array.from({ length: 14 }).map((_, i) =>
    format(addDays(new Date(), i), "dd/MM/yyyy")
  )

  return (
    <div style={{ marginTop: 30 }}>
      <h3>Calendario (próximas fechas)</h3>
      <ul>
        {days.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    </div>
  )
}
