import React, {useState} from 'react'
import './App.css'
import Questions from './Data';

function App() {
//setting various state
  const[quizQuestions, setQuizQuestions] = useState(Questions);
  const [currentQuestionIndex, setCurrentQuestionIndex]= useState(0);
  const[score, setScore]= useState(0);
  const[showResults, setShowResults]= useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  
  // defined a click handler function with settimeout functionality
  const selectoptionHandler = (option) => {
    setSelectedOption(option);
    if (option === quizQuestions[currentQuestionIndex].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    setTimeout(() => {
      const nextQuestionIndex = currentQuestionIndex + 1;
      if (nextQuestionIndex < quizQuestions.length) {
        setCurrentQuestionIndex(nextQuestionIndex);
      } else {
        setShowResults(true);
      }
      setSelectedOption(null); 
    }, 2000); //
  };
// restart the quiz
  const restarthandler =()=>{
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResults(false)

  }

  const statusHandler = () => {
    if(score >= quizQuestions.length * 75 / 100){
        return "Exellent";
    } else if(score >= quizQuestions.length * 50 / 100){
        return "Good";
    } else if(score >= quizQuestions.length * 33 / 100){
        return "passed";
    } else {
        return "Fail";
    }
}

return (
    <div className='app'>
      <header>
        <h1>ReactQuizApp</h1>
        </header>
        <div className='title'>
          <h2>Test your ReactJ.S. knowledge</h2>
        </div>

        
          {showResults ? (
            <div className='result-section'>
              <img src="data:image/jpeg;base64,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"/>
              <h2 className='h2tag'>You have submittited all the quetions</h2>
              <h2 className='h2tag'>your score is {score}/ {quizQuestions.length}</h2>
              <h2 className='h2tag'>  peformance Status : {statusHandler()}</h2>
              <button  className='btn'onClick={restarthandler}> Restart Quiz</button>
              
              </div>
              )
              : (
              <div className='quiz-section'>
                <div className='question'>
                <h3 className='bg-color'> question {currentQuestionIndex + 1}:</h3>
                <p className='bg-color'>
                  {quizQuestions[currentQuestionIndex].question}
                </p>
                </div>

                <ol className='options'>
                  {quizQuestions[currentQuestionIndex].options. map((option , index)=> (


                
                   <li className='option'>
                     <div   style={{backgroundColor: selectedOption
                ? option === quizQuestions[currentQuestionIndex].answer
                  ? 'green'
                  : selectedOption === option
                  ? 'orange'
                  : 'initial'
                : 'initial',
              color: 'white'
                     }} key={index} onClick={() => selectoptionHandler(option)}>{option} </div>
                     </li>

          ))}
                </ol>

                 </div>

            )} 
       </div>
  )
}
export default App
