import React, { useEffect, useState } from "react";

// Componente que simula un ciclo de vida
function Reloj({ color }) {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [estado, setEstado] = useState("⏳ Preparando componente...");

  // ✅ componentDidMount + componentWillUnmount + componentDidUpdate
  useEffect(() => {
    setEstado("✅ Componente montado (componentDidMount)");

    // Intervalo para actualizar la hora cada segundo
    const timer = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
      setEstado("🔄 Componente actualizado (componentDidUpdate)");
    }, 1000);

    // Cleanup (componentWillUnmount)
    return () => {
      clearInterval(timer);
      setEstado("🧹 Componente desmontado (componentWillUnmount)");
    };
  }, []); // [] → solo se monta/desmonta una vez

  return (
    <div className="card" style={{ marginTop: "16px" }}>
      <h3 style={{ color }}>{hora}</h3>
      <p>{estado}</p>
    </div>
  );
}

export default function CicloVida() {
  const [mostrar, setMostrar] = useState(true);
  const [color, setColor] = useState("limegreen");

  return (
    <div className="page fade-in">
      <h1>🔄 Ciclo de Vida en React</h1>
      <p className="muted">
        Con <code>useEffect</code> podemos simular:
      </p>
      <ul>
        <li><strong>componentDidMount</strong>: cuando el componente se monta.</li>
        <li><strong>componentDidUpdate</strong>: cuando se actualiza (por cambios de estado/props).</li>
        <li><strong>componentWillUnmount</strong>: cuando se desmonta.</li>
      </ul>

      <img 
  src="https://www.tutorialswebsite.com/wp-content/uploads/2019/09/reactjs-component-lifecycle-methods-840x473.jpeg" 
  alt="React Lifecycle" 
  style={{ maxWidth: "60%", borderRadius: "8px" }} 
/>


      <h2>📝 Ejemplo de código:</h2>
      <pre>
        <code>
{`function Reloj({ color }) {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());
  const [estado, setEstado] = useState("");

  useEffect(() => {
    setEstado("✅ Montado");
    const timer = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
      setEstado("🔄 Actualizado");
    }, 1000);

    return () => {
      clearInterval(timer);
      setEstado("🧹 Desmontado");
    };
  }, []);

  return (
    <div>
      <h3 style={{ color }}>{hora}</h3>
      <p>{estado}</p>
    </div>
  );
}`}
        </code>
      </pre>

      <h2>✏️ Prueba el ciclo de vida:</h2>
      <div className="btn-row">
        <button
          className="btn primary"
          onClick={() => setMostrar(!mostrar)}
        >
          {mostrar ? "Desmontar componente" : "Montar componente"}
        </button>
        <button
          className="btn ghost"
          onClick={() =>
            setColor(color === "limegreen" ? "dodgerblue" : "limegreen")
          }
        >
          Cambiar color
        </button>
      </div>

      {mostrar && <Reloj color={color} />}
    </div>
  );
}
