import React from 'react'

function Question({ question, options, selectedOption, handleSubmit,handleOptionChange}) {
  return (
    <div className='questionsection'>
        <h1>Question:{question.id}</h1>
        <h2>{question.question}</h2>
        <div className='options'>
        {options.map((option, index) => (
        <div key={index} className="option">
          <input
            type="radio"
            name="option"
            value={option}
            onChange={handleOptionChange}
            onSubmit={handleSubmit}
            selectedOption={selectedOption}
            checked={selectedOption === option}
/>
           <label className="form-check-label">{option}</label>
          
        </div>
      
      ))}
      <button type="submit" > SUBMIT </button>
      </div>
    </div>
      
    
  )
}

export default Question
