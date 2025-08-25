import React from "react";

export default function Inicio() {
  return (
    <div className="page fade-in">
      <h1>🚀 Proyecto React - Conceptos Fundamentales</h1>
      <p className="muted">
        Bienvenido a este proyecto, desarrollado con <b>React + Vite</b>, cuyo
        objetivo es explicar de manera sencilla y práctica los conceptos más
        importantes de React.  
      </p>
      <img 
  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
  alt="React Logo" 
  style={{ width: "200px" }} 
/>

      <div className="card-">
        <h2>¿Qué encontrarás aquí?</h2>
        <p>
          Cada sección de este proyecto corresponde a un concepto de React. En cada
          página verás:
        </p>
        <ul>
          <li>Una <b>definición clara</b> del concepto.</li>
          <li>Una <b>imagen ilustrativa</b> relacionada.</li>
          <li>Un <b>ejemplo práctico en código</b> con React.</li>
          <li>Una <b>demostración en vivo</b>.</li>
        </ul>
      </div>

      <div className="card-">
        <h2>Páginas disponibles</h2>
        <ol>
          <li><b>Props</b>: paso de información entre componentes.</li>
          <li><b>State</b>: manejo de estados locales en un componente.</li>
          <li><b>Ciclo de Vida</b>: explicación con <code>useEffect</code> y clases.</li>
          <li><b>Hooks</b>: uso de <code>useState</code>, <code>useEffect</code>, <code>useContext</code>.</li>
          <li><b>Virtual DOM</b>: qué es y por qué es más eficiente.</li>
          <li><b>Redux</b>: introducción a la gestión de estado global.</li>
        </ol>
      </div>

      <div className="card-">
        <h2>Navegación</h2>
        <p>
          Usa el menú superior para moverte entre las páginas o haz clic en cada
          sección para ver los ejemplos.
        </p>
      </div>

      <p className="muted" style={{ marginTop: "20px", fontStyle: "italic" }}>
        💡 Consejo: explora cada página en orden para tener una comprensión paso
        a paso de React.
      </p>
    </div>
  );
}

