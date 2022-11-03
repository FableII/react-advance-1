import React from "react";
import { Link } from "react-router-dom";

import useTheme from "./hooks/useTheme";
import "./App.css";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <Link to="/about">About Page</Link>
      <Link to="/default">Default comonent</Link>
      <Link to="/hoc">Hoc example</Link>
      <Link to="/prop">Render Props Example</Link>
      <Link to="/hooks">Hooks Example</Link>
      <br></br>
      <button type="button" onClick={toggleTheme}>
        Switch theme
      </button>
    </div>
  );
}

export default App;
