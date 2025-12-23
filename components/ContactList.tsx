export default function ContactList() {
  const contacts = [
    { name: "Sergio", email: "alquevaproducciones@hotmail.com" }
  ];

  return (
    <div style={{ border: "2px solid #32CD32", padding: "20px", borderRadius: "15px" }}>
      <h3 style={{ color: "#32CD32" }}>Lista de Contactos</h3>
      <ul>
        {contacts.map((c, i) => (
          <li key={i}>{c.name} - {c.email}</li>
        ))}
      </ul>
    </div>
  );
}
