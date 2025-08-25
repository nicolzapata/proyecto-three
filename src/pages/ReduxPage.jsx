import React from "react";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

// ✅ Reducer
const initialState = { contador: 0 };
function contadorReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENTAR":
      return { contador: state.contador + 1 };
    case "DISMINUIR":
      return { contador: state.contador - 1 };
    case "REINICIAR":
      return { contador: 0 };
    default:
      return state;
  }
}

// ✅ Store
const store = createStore(contadorReducer);

// Componente de la página
export default function ReduxPage() {
  return (
    <Provider store={store}>
      <div className="page fade-in">
        <h1>🗂️ Redux en React</h1>
        <p className="muted">
          <strong>Redux</strong> es una librería para manejar el estado global
          de la aplicación de forma predecible.
        </p>

        <h2>📌 Conceptos básicos</h2>
        <ul>
          <li><strong>Store</strong>: almacena el estado global.</li>
          <li><strong>Reducer</strong>: función que indica cómo cambia el estado.</li>
          <li><strong>Actions</strong>: objetos que describen qué hacer.</li>
          <li><strong>Dispatch</strong>: método para enviar acciones.</li>
        </ul>

        <img 
  src="https://strapi.dhiwise.com/uploads/react_redux_flow_chart_OG_Image_0ea0ec096a.png"
  alt="Redux Flow" 
  style={{ maxWidth: "60%", borderRadius: "8px" }} 
/>

        <h2>📝 Ejemplo de código:</h2>
        <pre>
          <code>
{`import { createStore } from "redux";

// Reducer
const initialState = { contador: 0 };
function contadorReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENTAR":
      return { contador: state.contador + 1 };
    case "DISMINUIR":
      return { contador: state.contador - 1 };
    case "REINICIAR":
      return { contador: 0 };
    default:
      return state;
  }
}

// Store
const store = createStore(contadorReducer);

// Uso en componente con Provider + useSelector + useDispatch`}
          </code>
        </pre>

        <h2>✏️ Demo con Redux:</h2>
        <ContadorRedux />
      </div>
    </Provider>
  );
}

// ✅ Demo interactiva
function ContadorRedux() {
  const contador = useSelector((state) => state.contador);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <p>Contador: {contador}</p>
      <div className="btn-row">
        <button
          className="btn primary"
          onClick={() => dispatch({ type: "INCREMENTAR" })}
        >
          Aumentar
        </button>
        <button
          className="btn danger"
          onClick={() => dispatch({ type: "DISMINUIR" })}
        >
          Disminuir
        </button>
        <button
          className="btn ghost"
          onClick={() => dispatch({ type: "REINICIAR" })}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
}
