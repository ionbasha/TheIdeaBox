import { useState } from 'react'

const SubmissionCard = ({ submission }) => {

  const [likes, setLikes] = useState(0)

  const handleClick = () => {
    setLikes(likes+1)
    console.log(likes)
  }

  return (
    <div className='subCard'>
      <div className='buttonBar'>
        <button className='buttonLike' onClick={handleClick}></button>
        <label>{likes}</label>
      </div>
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
