import React, { useState, useEffect } from "react";

export default function Hooks() {
  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState("Esperando cambios...");

  // ✅ useEffect que se ejecuta cada vez que cambia el contador
  useEffect(() => {
    setMensaje(`🔄 El contador cambió a: ${contador}`);
  }, [contador]);

  return (
    <div className="page fade-in">
      <h1>🪝 Hooks en React</h1>
      <p className="muted">
        Los <strong>hooks</strong> permiten manejar <code>estado</code> y{" "}
        <code>efectos</code> en componentes funcionales.
      </p>

      <img 
  src="https://tsh.io/wp-content/uploads/2020/10/react-hooks-best-practices-lead_.jpg" 
  alt="React Hooks" 
  style={{ maxWidth: "50%", borderRadius: "8px" }} 
/>

      <h2>📝 Ejemplo de código:</h2>
      <pre>
        <code>
{`import React, { useState, useEffect } from "react";

function EjemploHooks() {
  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState("Esperando cambios...");

  useEffect(() => {
    setMensaje(\`El contador cambió a: \${contador}\`);
  }, [contador]);

  return (
    <div>
      <p>{mensaje}</p>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Aumentar</button>
      <button onClick={() => setContador(contador - 1)}>Disminuir</button>
      <button onClick={() => setContador(0)}>Reiniciar</button>
    </div>
  );
}

export default EjemploHooks;`}
        </code>
      </pre>

      <h2>✏️ Prueba los hooks:</h2>
      <p>{mensaje}</p>
      <p>Contador: {contador}</p>
      <div className="btn-row">
        <button className="btn primary" onClick={() => setContador(contador + 1)}>
          Aumentar
        </button>
        <button className="btn danger" onClick={() => setContador(contador - 1)}>
          Disminuir
        </button>
        <button className="btn ghost" onClick={() => setContador(0)}>
          Reiniciar
        </button>
      </div>
    </div>
  );
}
