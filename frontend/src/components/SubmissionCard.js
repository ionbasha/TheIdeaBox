import { useState } from 'react'
import axios from 'axios'

const SubmissionCard = ({ submission }) => {

  const [likes, setLikes] = useState(submission.likes)

  const handleClick = () => {
    setLikes(likes+1)

    const id_sub = submission._id.toString()
    
    try {
      const res = axios.patch(`http://localhost:8000/${id_sub}`)

      res.status === 200 ? console.log("Likes += 1") : console.log("Error updating likes")

    }
    catch(e) {
      console.log(e)
    }
  }

  return (
    <div className='subCard'>
      <div className='buttonBar'>
        <button className='buttonLike' onClick={handleClick}></button>
        <p>{likes}</p>
      </div>
      <div className='cardDetails'>
        <label>Project Title:</label>
        <p>{submission.title}</p>
        <label>Description:</label>
        <p>{submission.desc}</p>
        <label>Difficulty (Beginner, Intermediate, Advanced):</label>
        <p>{submission.difficulty}</p>
        <label>Programming language(s) / framework suggestions:</label>
        <p>{submission.techSuggests}</p>
      </div>
    </div>
  )
}

export default SubmissionCard
