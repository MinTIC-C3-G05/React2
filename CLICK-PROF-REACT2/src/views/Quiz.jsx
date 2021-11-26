import React, { useState } from "react";
import "../css/quiz.css";
import questions from "../JSON Files/questions.json";
import { useAuth0 } from '@auth0/auth0-react';
import LoginPage from "../components/LoginPage";
import axios from "axios";

export default function Quiz() {


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState("");
  const [preLevel, setpreLevel] = useState("");
  const { user, isAuthenticated } = useAuth0();
  // const [activeClass, setActiveClass] = useState(false);

  const gettingLevel = () => {
    if (score === 1) {
      setLevel("A1");
    } else if (score === 2 || score === 3) {
      setLevel("A2");
    } else if (score === 4 || score === 5) {
      setLevel("B1");
    } else if (score === 6 || score === 7) {
      setLevel("B2");
    } else if (score === 8) {
      setLevel("C1");
    } else if (score === 9) {
      setLevel("C2");
    }
    console.log("hola al final del if");
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      gettingLevel();

    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
     
        
        setCurrentQuestion(nextQuestion);
    
    } else {
      setShowScore(true);
      getInfo ();
    }
  };
  const startAgain = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setLevel("");
  };

  const getInfo = () => {
    axios.get("/test").then((response) => {
    response.data.map((element) => {
      if (user.email === element.email) {
        setpreLevel(element.level);
      }
    });
  });
}

  const submitNewLevel = () => {

    // PUT NUEVO LEVEL
        const newResult ={
          email: user.email,
          level: level
        };

        axios
        .put("/test", newResult)
        .then(alert("You have finished again!"));
//FIN DEL PUT
      }

  const submitScore = () =>{

// POST DEL LEVEL
          const Result = {
            email: user.email,
            level: level
          };

          axios
          .post("/test", Result)
          .then(alert("You have finished!"));
//FIN DEL POST
        }

  const chosePutPost = () => {
    if (preLevel !== "") {
      console.log("vamos Put, ya habia datos antes");
      submitNewLevel ()
    }
    else {
      console.log("vamos Post, es un dato inédito");
      submitScore ()
    }
  }

if (isAuthenticated) {

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length} and your level is {level}
          <div>
            <button onClick={startAgain}>START AGAIN</button>
            <br />
            <a href='/login'><button onClick={chosePutPost}> FINISH!</button></a>
          </div>
          <br />
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text" key={questions.questionText}>
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption,index) => (
              <button
                // className={activeClass && "correct"}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                key={index}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

return (
  <React.Fragment>
      <br/>
      <h4 class="font-family">PLEASE LOG IN</h4>
      <LoginPage />
  </React.Fragment>
)
}