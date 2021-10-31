import React,{useState} from 'react'

function QuizPrueba() {

    const questions = [
        { 
            questionText: 'what is your name?', 
            answerOptions: [
                { answerText: 'option 1', isCorrect: false },
                { answerText: 'option 2', isCorrect: false }, 
                { answerText: 'option 3', isCorrect: false }, 
                { answerText: 'Correct', isCorrect: true },
            ], 
        },
        { questionText: 'How old are you?',
        answerOptions: [
            { answerText: 'Correct', isCorrect: true }, 
            { answerText: "I don't know", isCorrect: false }, 
            { answerText: "Otra opcion" , isCorrect: false}, 
            { answerText: "Claro que yes", isCorrect: false },
        ] 
    },
    ]

    const [currentQuestion, setCurrentQuestion] = useState(0);
    
    const [showScore, setShowScore] = useState(false)
    
    const [score, setScore] = useState(0)


    const handleAnswerButtonClick = (isCorrect) => {
        if(isCorrect===true){
            setScore(score+1)
        }


        const nextQuestion = currentQuestion + 1;
        
        if (nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        }else{
            
            setShowScore(true);
        }
    }
    


    return (
        <React.Fragment>
            <h1>QUIZ PRUEBA</h1>
            
            {showScore ? (
                <div>Your scored {score} out of {questions.length} </div>
            
                ):(
            <div>
                <div><span>{currentQuestion+1}</span>/{questions.length}</div>
                

                <div> {questions[currentQuestion].questionText} </div>

                <div>
                    {questions[currentQuestion].answerOptions.map((answerOption)=>(
                    <button onClick={()=>handleAnswerButtonClick(answerOption.isCorrect)} >{answerOption.answerText}</button>
                    ))}
                
                </div>
            </div>
                )}
            


        </React.Fragment>
    )
}

export default QuizPrueba
