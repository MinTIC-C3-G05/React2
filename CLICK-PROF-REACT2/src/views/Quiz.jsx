import React, { useState } from "react";
import "../css/quiz.css";

export default function Quiz() {
  const questions = [
    {
      instructions: "Choose the best word to complete the sentence.",
      questionText: "The baby boy saw ___ in the mirror and started to cry.",
      answerOptions: [
        { answerText: "itself", isCorrect: false },
        { answerText: "himself", isCorrect: true },
        { answerText: "herself", isCorrect: false },
        { answerText: "themselves", isCorrect: false },
      ],
    },
    {
      instructions:
        "Choose the best word (or phrase) to complete the sentence.",
      questionText:
        "Firstly, I want to congratulate you all. Secondly, I would like to wish you good luck and ___ I hope you have enjoyed the course.",
      answerOptions: [
        { answerText: "finally", isCorrect: true },
        { answerText: "at last", isCorrect: false },
        { answerText: "in the end", isCorrect: false },
        { answerText: "last", isCorrect: false },
      ],
    },
    {
      instructions: "Choose the best word to complete the sentence.",
      questionText:
        "You ___ clean your teeth twice a day to avoid having problems.",
      answerOptions: [
        { answerText: "should", isCorrect: true },
        { answerText: "will", isCorrect: false },
        { answerText: "can", isCorrect: false },
        { answerText: "have", isCorrect: false },
      ],
    },
    {
      instructions: "Choose the best word to complete the dialogue.",
      questionText:
        "--Jack: I think it’s going to rain. --Jill: I ___ , the clouds are clearing. \n --Jack: We’ll soon see.",
      answerOptions: [
        { answerText: "argue", isCorrect: false },
        { answerText: "complain", isCorrect: false },
        { answerText: "disagree", isCorrect: true },
        { answerText: "reject", isCorrect: false },
      ],
    },
    {
      instructions: "Choose the best word to complete the dialogue.",
      questionText:
        "Anne: Oh! I watched the new TV show last night. \n Jo: Was it any good? \n Anne: Yes. ___ the TV set is so old I could see very little.",
      answerOptions: [
        { answerText: "mind you", isCorrect: false },
        { answerText: "by the way", isCorrect: true },
        { answerText: "still", isCorrect: false },
        { answerText: "despite", isCorrect: false },
      ],
    },
    {
      instructions: "Choose the best word to complete the sentence.",
      questionText:
        "Have you got time to discuss your work now or are you ___ to leave?",
      answerOptions: [
        { answerText: "about", isCorrect: true },
        { answerText: "round", isCorrect: false },
        { answerText: "planned", isCorrect: false },
        { answerText: "thinking", isCorrect: false },
      ],
    },
    {
      instructions: "Choose the best phrase to complete the sentence.",
      questionText: "I'd like two tickets for tomorrow night.",
      answerOptions: [
        { answerText: "How much did you pay?", isCorrect: false },
        { answerText: "Afternoon and evening", isCorrect: false },
        { answerText: "Thank you!", isCorrect: false },
        { answerText: "I'll just check for you.", isCorrect: true },
      ],
    },
    {
      instructions:
        "Some words are often used together, e.g. smelly + socks. Choose a word which is often used with:",
      questionText: "sophisticated ____",
      answerOptions: [
        { answerText: "dress", isCorrect: true },
        { answerText: "ship", isCorrect: false },
        { answerText: "helmet", isCorrect: false },
        { answerText: "guitar", isCorrect: false },
      ],
    },
    {
      instructions: "Choose the word or phrase which has a similar meaning to:",
      questionText: "return",
      answerOptions: [
        { answerText: "acoount", isCorrect: false },
        { answerText: "turn again", isCorrect: false },
        { answerText: "reverse", isCorrect: false },
        { answerText: "go back", isCorrect: true },
      ],
    },
    {
      instructions: "Complete the gap with the correct option",
      questionText: "If I were you, _______",
      answerOptions: [
        { answerText: "I will get a new job", isCorrect: false },
        { answerText: "would have gotten a new job", isCorrect: false },
        { answerText: "I would quit your job", isCorrect: true },
        { answerText: "I get a new job", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState("");
  const [activeClass, setActiveClass] = useState(false);

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
    }
  };
  const startAgain = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setLevel("A0");
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length} and your level is {level}
          <div>
            <button onClick={startAgain}>START AGAIN</button>
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
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                className={activeClass && "correct"}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                key={questions.answerText}
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
