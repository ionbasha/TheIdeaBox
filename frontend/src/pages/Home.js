import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SubmissionCard from '../components/SubmissionCard'
import SubmissionForm from '../components/SubmissionForm'
import { useNavigate } from 'react-router-dom'
import lightbulb from '../media/lightbulb.png'

const Home = () => {

  const navigate = useNavigate()

  const [submissions, setSubmissions] = useState(null)
  
  useEffect(() => {
    const getAllSubmissions = async () => {
      try {
        const response = await axios.get('http://localhost:8000/')
        response.status === 200 ? setSubmissions(response.data) : setSubmissions(null)
      }
      catch(e) {
        console.log(e)
      }
    }

    getAllSubmissions()
  }, [])

  const goToForm = () => {
    navigate('/submitidea')
  }

  return (
    <div className='displayedContent'>
      <div className='topPage'>
        <h2>TheIdeaBox</h2>
        <img src={lightbulb} alt="Failed to load" className='center'/>
        <p>Put your coding project ideas here!</p>
      </div>
      <button className='submitButton' onClick={goToForm}>Submit your project ideas here!</button>
      <div className='cards'>
        {submissions && submissions.map((singleSubmit) => (
            <SubmissionCard submission = {singleSubmit} />
          ))}
      </div>
    </div>
  )
}

export default Home

