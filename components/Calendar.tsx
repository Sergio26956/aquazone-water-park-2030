import { useState } from "react";
import { format } from "date-fns";

export default function Calendar() {
  const [date, setDate] = useState(format(new Date(), "yyyy-MM-dd"));

  return (
    <div style={{ border: "2px solid #00BFFF", padding: "20px", borderRadius: "15px" }}>
      <h3 style={{ color: "#00BFFF" }}>Calendario de Reservas</h3>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        style={{ padding: "10px", fontSize: "1rem", marginTop: "10px" }}
      />
    </div>
  );
}
