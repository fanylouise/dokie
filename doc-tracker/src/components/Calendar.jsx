import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Importa os estilos

export default function CustomCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <h2>Calendário</h2>
      <Calendar onChange={setDate} value={date} />
    </div>
  );
}
