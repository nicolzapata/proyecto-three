import React, { useState } from "react";

export default function State() {
  // contador SIEMPRE como número
  const [contador, setContador] = useState(0);
  // el input se maneja como string (como todos los <input>)
  const [inputValor, setInputValor] = useState("");

  const esNumeroValido = (v) => {
    if (v === "" || v === "-" || v === "+") return false; // evita casos raros
    const n = Number(v);
    return Number.isFinite(n);
  };

  const fijarContador = () => {
    if (esNumeroValido(inputValor)) {
      setContador(Number(inputValor)); // ✅ fija con número real
    }
  };

  return (
    <div className="page fade-in">
      <h1>⚛️ State en React</h1>
      <p className="muted">
        <strong>useState</strong> permite guardar y actualizar valores que cambian en el tiempo.
      </p>
      
      <img 
  src="https://www.bacancytechnology.com/blog/wp-content/uploads/2023/02/state-management-react-min.png" 
  alt="React State Example" 
  style={{ maxWidth: "60%", borderRadius: "8px" }} 
/>      
      <h2>📝 Ejemplo de código:</h2>
      <pre>
        <code>
{`import React, { useState } from "react";

function State() {
  const [contador, setContador] = useState(0);
  const [inputValor, setInputValor] = useState("");

  const esNumeroValido = (v) => {
    if (v === "" || v === "-" || v === "+") return false;
    const n = Number(v);
    return Number.isFinite(n);
  };

  const fijarContador = () => {
    if (esNumeroValido(inputValor)) {
      setContador(Number(inputValor));
    }
  };

  return (
    <div>
      <input
        type="number"
        value={inputValor}
        onChange={(e) => setInputValor(e.target.value)}
      />
      <button onClick={fijarContador} disabled={!esNumeroValido(inputValor)}>
        Fijar valor
      </button>

      <p>Contador: {contador}</p>
      <button onClick={() => setContador((prev) => prev + 1)}>Aumentar</button>
      <button onClick={() => setContador((prev) => prev - 1)}>Disminuir</button>
    </div>
  );
}

export default State;`}
        </code>
      </pre>

      <h2>✏️ Prueba el estado tú mismo:</h2>
      <div className="input-row">
        <input
          type="number"
          inputMode="numeric"
          step="any"
          placeholder="Número..."
          value={inputValor}
          onChange={(e) => setInputValor(e.target.value)}
        />
        <button
          className="btn success"
          onClick={fijarContador}
          disabled={!esNumeroValido(inputValor)}
          title={!esNumeroValido(inputValor) ? "Ingresa un número válido" : ""}
        >
          Fijar valor
        </button>
      </div>

      <p style={{ marginTop: 8 }}>Contador: {contador}</p>

      <div className="btn-row">
        <button
          className="btn primary"
          onClick={() => setContador((prev) => prev + 1)}
        >
          Aumentar
        </button>
        <button
          className="btn danger"
          onClick={() => setContador((prev) => prev - 1)}
        >
          Disminuir
        </button>
      </div>
    </div>
  );
}
