import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Importamos todas las páginas
import Inicio from "./pages/Inicio";
import PropsPage from "./pages/Props";
import StatePage from "./pages/State";
import CicloVida from "./pages/CicloVida";
import HooksPage from "./pages/Hooks";
import VirtualDOM from "./pages/VirtualDOM";
import ReduxPage from "./pages/ReduxPage";

function App() {
  return (
    <Router>
      <header>
        <div className="logo">React Guía</div>
        <nav>
          <Link to="/">Inicio</Link>
          <Link to="/props">Props</Link>
          <Link to="/state">State</Link>
          <Link to="/ciclo-vida">Ciclo de Vida</Link>
          <Link to="/hooks">Hooks</Link>
          <Link to="/virtual-dom">Virtual DOM</Link>
          <Link to="/redux">Redux</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/props" element={<PropsPage />} />
          <Route path="/state" element={<StatePage />} />
          <Route path="/ciclo-vida" element={<CicloVida />} />
          <Route path="/hooks" element={<HooksPage />} />
          <Route path="/virtual-dom" element={<VirtualDOM />} />
          <Route path="/redux" element={<ReduxPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
