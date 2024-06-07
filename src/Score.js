import React from 'react'

function Score({questionBank, score, restartQuiz}) {
  return (
    
          <div className='resultSection'>
            <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" width="80px" height="80px" alt="img2"/>
            <h2>You have sucessfully submitted the assignment</h2>
            <h3><b>Question asked </b>{questionBank.length}</h3>
            <h3><b>Score</b>{score}</h3>
            <button className='btn' onClick={restartQuiz}>Restart quiz</button>
        </div>
      
   
  )
}

export default Score
