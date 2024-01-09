import React from 'react'

const SubmissionCard = ({ submission }) => {
  return (
    <div className='subCard'>
      <label>Project Title:</label>
      <p>{submission.title}</p>
      <label>Description:</label>
      <p>{submission.desc}</p>
      <label>Difficulty (Beginner, Intermediate, Advanced):</label>
      <p>{submission.difficulty}</p>
      <label>Programming language(s) / framework suggestions:</label>
      <p>{submission.techSuggests}</p>
    </div>
  )
}

export default SubmissionCard