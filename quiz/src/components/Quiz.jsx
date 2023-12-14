import React, { useState } from "react";
import QuestionBox from "./QuestionBox";
import Result from "./Result";
import NavBar from "./NavBar";
import "./Quiz.css";
import { ColorTheme } from "../App";

function Quiz() {
  const [display, setDisplay] = useState(true); // to display the questions or result

  const [currentQuestion, setcurrentQuestion] = useState(0);

  const [score, updateScore] = useState(0);

  // Getting the state of theme and the function to change the state of theme as props
  const [theme, handleTheme] = React.useContext(ColorTheme);

  // Changing the theme for the content box
  const styles = {
    backgroundColor: `${theme ? "#1e1e1e" : "#ffffff"}`,
    border: `3px solid ${theme ? "white" : "black"}`,
  };

  return (
    <div className="title">
      <NavBar />

      <div className="box" style={styles}>
        {display ? ( // Calling the component based on the state of display ( the questions or the result )
          <QuestionBox
            currentQuestion={currentQuestion}
            setDisplay={setDisplay}
            setcurrentQuestion={setcurrentQuestion}
            updateScore={updateScore}
          />
        ) : (
          <Result
            score={score}
            setDisplay={setDisplay}
            setcurrentQuestion={setcurrentQuestion}
            updateScore={updateScore}
          />
        )}
      </div>
    </div>
  );
}

export default Quiz;
