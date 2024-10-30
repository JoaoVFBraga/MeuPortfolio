import Inicio from "./components/Inicio/Inicio.jsx"
import './App.css';
import Portfolio from "./components/Portfolio/Portfolio.jsx";

import { useState } from "react";

export default function App() {

  const [exibePortfolio, setExibePortfolio] = useState(false);

  return (
    <div>
      {!exibePortfolio ? <Inicio setExibePortfolio={setExibePortfolio} /> : null}
      {exibePortfolio ? <Portfolio /> : null}
    </div>
  )
}