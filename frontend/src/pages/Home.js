import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SubmissionCard from '../components/SubmissionCard'

const Home = () => {

  const [submissions, setSubmissions] = useState(null)
  
  useEffect(() => {
    const getAllSubmissions = async () => {
      try {
        const response = await axios.get('http://localhost:8000/submissions')
        response.status === 200 ? setSubmissions(response.data) : setSubmissions(null)
      }
      catch(e) {
        console.log(e)
      }
    }

    getAllSubmissions()
  }, [])

  return (
    <div className='displayedContent'>
      <div className='topPage'>
        <h2>TheIdeaBox</h2>
        <p>Put your coding project ideas here!</p>
      </div>
      <div className='cards'>
        {submissions && submissions.map((singleSubmit) => (
            <SubmissionCard submission = {singleSubmit} />
          ))}
      </div>
    </div>
  )
}

export default Home

