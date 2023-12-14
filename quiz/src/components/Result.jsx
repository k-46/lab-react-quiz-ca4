import React from "react";

export default function Result(props) {
  const score = props.score;
  const setDisplay = props.setDisplay;
  const setcurrentQuestion = props.setcurrentQuestion;
  const updateScore = props.updateScore;

  const handleReset = () => {
    setDisplay((prev) => (prev = true));
    setcurrentQuestion((prev) => (prev = 0));
    updateScore((prev) => (prev = 0));
  };

  return (
    <div className="result">
      <h1>Results</h1>
      <div>
        {score} out of 5 is Correct <p>( {(score / 5) * 100} % )</p>
      </div>
      <button className="cursor" onClick={handleReset}>
        Restart
      </button>
    </div>
  );
}
