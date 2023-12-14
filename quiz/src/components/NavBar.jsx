import React from "react";
import { FaLightbulb } from "react-icons/fa6";
import { GiChoice } from "react-icons/gi";
import { ColorTheme } from "../App";

function NavBar() {
  // Getting the state of theme and the function to change the state of theme using useContext
  const [theme, handleTheme] = React.useContext(ColorTheme);

  return (
    <div className="NavBar">
      <div id="theme" className="cursor" onClick={handleTheme}>
        <FaLightbulb size="30px" fill={theme ? "white" : "black"} />
      </div>
      <h2>
        Enigma IQ
        <span>
          <GiChoice size="40px" fill={theme ? "white" : "black"} />
        </span>
      </h2>
    </div>
  );
}

export default NavBar;
