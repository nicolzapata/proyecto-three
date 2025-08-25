import { useState } from "react";

// Componente hijo que recibe props
function UserCard({ name, age }) {
  return (
    <div className="card" style={{ marginTop: "15px" }}>
      <h3>👤 Usuario</h3>
      <p>
        <strong>Nombre:</strong> {name || "—"}
      </p>
      <p>
        <strong>Edad:</strong> {age || "—"}
      </p>
    </div>
  );
}

export default function PropsPage() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  return (
    <div className="page fade-in">
      {/* 1. Definición */}
      <h1>📌 Props en React</h1>
      <p className="muted">
        En React, las <strong>props</strong> (propiedades) permiten pasar información de un 
        componente padre a un componente hijo. Son <em>inmutables</em>, es decir, 
        el hijo no puede modificarlas directamente. Gracias a las props, los componentes 
        se vuelven reutilizables y dinámicos.
      </p>

      {/* 2. Imagen ilustrativa */}
      <div className="card">
        <h2>🖼️ Diagrama de Props</h2>
        <img
          src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*gndT3iO4fMt3k-2MSWvgHA.png"
          alt="Diagrama de Props"
          style={{ maxWidth: "70%", borderRadius: "8px" }}
        />
      </div>

      {/* 3. Ejemplo en vivo */}
      <div className="card">
        <h2>💻 Ejemplo en vivo</h2>
        <p>Ingresa un nombre y una edad para ver cómo se pasan como props:</p>

        <input
          type="text"
          placeholder="Escribe un nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
          style={{ marginRight: "10px" }}
        />

        <input
          type="number"
          placeholder="Edad"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="input"
        />

        {/* Componente hijo recibiendo props */}
        <UserCard name={name} age={age} />
      </div>
    </div>
  );
}

