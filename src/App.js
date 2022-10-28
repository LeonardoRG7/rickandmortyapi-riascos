import { useState } from "react";
import "./App.css";
import Caracters from "./Components/Caracters";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [btnColor, setBtnColor] = useState(false);

  let bg = darkMode ? "bg-dark text-light" : "bg-light text-dark";
  return (
    <div className={"App " + bg}>
      <Header darkMode={darkMode} onClick={() => setDarkMode(!darkMode)} />
      <Caracters />
    </div>
  );
}

export default App;
