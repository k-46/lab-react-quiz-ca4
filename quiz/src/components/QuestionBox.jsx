import React, { useState } from "react";
import questions from "../Data/questions";

function QuestionBox(props) {
  const currentQuestion = props.currentQuestion;
  const setcurrentQuestion = props.setcurrentQuestion;
  const setDisplay = props.setDisplay;
  const updateScore = props.updateScore;

  const [high, setHigh] = useState(false); // For highlighting the Question

  // To handle the score and the current question when an option is clicked
  const handleClick = (e) => {
    if (e) {
      updateScore((prev) => (prev += 1));
    }

    if (currentQuestion >= questions.length - 1) {
      setDisplay((prev) => !prev);
    } else {
      setcurrentQuestion((prev) => (prev += 1));
    }
  };

  return (
    <>
      <p style={{ color: "#808080" }}>
        Question : {currentQuestion + 1} out of 5
      </p>

      <h2 style={{ color: `${high ? "#EF3837" : "inherit"}` }}>
        {questions[currentQuestion].text}
      </h2>

      <div className="options" style={{ color: "black" }}>
        {questions[currentQuestion].options.map((option) => {
          //Displaying the options using map
          return (
            <p
              key={option.id}
              id={option.id}
              className="cursor option"
              onClick={() => handleClick(option.isCorrect)}
            >
              {option.text}
            </p>
          );
        })}
      </div>

      <div className="highLight">
        <button
          className="cursor"
          onClick={() => setHigh((prev) => (prev = true))}
        >
          HighLight
        </button>
        <button
          className="cursor"
          onClick={() => setHigh((prev) => (prev = false))}
        >
          Remove HighLight
        </button>
      </div>
    </>
  );
}

export default QuestionBox;
