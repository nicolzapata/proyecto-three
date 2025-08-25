import React from "react";

export default function VirtualDOM() {
  return (
    <div className="page fade-in">
      <h1>🖥️ Virtual DOM en React</h1>
      <p className="muted">
        El <strong>Virtual DOM</strong> es una representación ligera del DOM
        real. React lo utiliza para optimizar los cambios en la interfaz,
        comparando una versión anterior con la nueva (diffing) y aplicando solo
        las modificaciones necesarias al DOM real.
      </p>

      <h2>📌 ¿Por qué es importante?</h2>
      <ul>
        <li>Mejora el rendimiento de las aplicaciones.</li>
        <li>Evita modificaciones innecesarias en el DOM real.</li>
        <li>Permite que React actualice solo lo que cambió.</li>
      </ul>

      <img 
  src="https://www.syncfusion.com/blogs/wp-content/uploads/2023/07/The-Power-of-Reacts-Virtual-DOM-A-Comprehensive-Explanation.png" 
  alt="Virtual DOM" 
  style={{ maxWidth: "70%", borderRadius: "8px" }} 
/>


      <h2>📝 Ejemplo de código:</h2>
      <pre>
        <code>
{`import React, { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>
        Aumentar
      </button>
    </div>
  );
}

export default App;`}
        </code>
      </pre>

      <h2>✏️ Demostración interactiva:</h2>
      <Demo />
    </div>
  );
}

function Demo() {
  const [contador, setContador] = React.useState(0);

  return (
    <div className="card">
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
