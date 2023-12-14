import React, { useState } from "react";
import "./App.css";

import Quiz from "./components/Quiz";

export const ColorTheme = React.createContext();


function App() {
  const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    setTheme((prevtheme) => !prevtheme);
  };

  const styles = {
    background: `${theme ? "#323233" : "#E8E8E8"}`,
    color: `${theme ? "white" : "black"}`,
  };

  return (
    <div className="App" style={styles}>

<ColorTheme.Provider value={[theme, handleTheme]}>
        <Quiz />
      </ColorTheme.Provider>

    </div>
  );
}

export default App;
