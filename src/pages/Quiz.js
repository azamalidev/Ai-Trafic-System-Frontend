import React, { useState } from 'react';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    answer: 'Paris'
  },
  // Add 9 more questions in a similar format
];

export default function QuizPage() {
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [currentQuestionIndex]: e.target.value
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = () => {
    // You can check answers here and submit the quiz
    console.log(answers);
  };

  const { question, options } = questions[currentQuestionIndex];

  return (
    <div>
      <h2>{question}</h2>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            name={`question-${currentQuestionIndex}`}
            value={option}
            checked={answers[currentQuestionIndex] === option}
            onChange={handleChange}
          />
          {option}
        </div>
      ))}
      <button onClick={handleNext}>Next</button>
      {currentQuestionIndex === questions.length - 1 && (
        <button onClick={handleSubmit}>Submit Quiz</button>
      )}
    </div>
  );
}
