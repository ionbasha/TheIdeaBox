import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const SubmissionForm = () => {

  const navigate = useNavigate()

  const goHome = () => {
    navigate('/')
  }

  const [submitData, setSubmitData] = useState({
    title: '',
    desc: '',
    difficulty: '',
    techSuggests: '',
    likes: 0
  })

  const handleChange = e => {
      const name = e.target.name
      const val = e.target.value

      setSubmitData(prevData => ({
        ...prevData, [name]: val
      }))
  }

  const handleSubmit = async e => {
      e.preventDefault()

      console.log("in handleSubmit")

      const title = submitData.title
      const desc = submitData.desc
      const difficulty = submitData.difficulty
      const techSuggests = submitData.techSuggests
      const likes = submitData.likes

      try {
        const res = await axios.post('http://localhost:8000/', {
        title,
        desc,
        difficulty,
        techSuggests,
        likes
      })
      
      if(res.status === 201) {
        goHome()
      }
      }

      catch(e) {
        console.log("ERROR")
      }
  
  }
      
    return (
      <div className='formDiv'>
        <form>
          <h1>Submit a new project idea</h1>
          <br/>
          <br/>
          <label>Title</label>
          <input 
            name = 'title'
            type={'text'} 
            placeholder='Enter project title here..'
            value={submitData.title}
            onChange={handleChange}>
          </input>
          <label>Description</label>
          <input 
            name='desc'
            type={'text'} 
            placeholder='Enter project description here..'
            value={submitData.desc}
            onChange={handleChange}>
          </input>
          <label>Difficulty</label>
          <div className='radioButtons'>
              <div className='buttonLabelPair'>
                <label>Beginner</label>
                <input 
                  name='difficulty' 
                  type={'radio'} 
                  value = 'Beginner' 
                  onChange={handleChange} 
                  checked={submitData.difficulty === 'Beginner'}>
                </input>
              </div>
              <div className='buttonLabelPair'>
                <label>Intermediate</label>
                <input 
                  name='difficulty' 
                  type={'radio'} 
                  value = 'Intermediate' 
                  onChange={handleChange} 
                  checked={submitData.difficulty === 'Intermediate'}>
                </input>
              </div>
              <div className='buttonLabelPair'>
                <label>Expert</label>
                <input 
                  name='difficulty' 
                  type={'radio'} 
                  value = 'Expert' 
                  onChange={handleChange} 
                  checked={submitData.difficulty === 'Expert'}>
                </input>
              </div>
          </div>
          <label>Programming Language(s) / framework suggestions</label>
          <input 
            name='techSuggests'
            type={'text'} 
            placeholder='Enter suggested languages and frameworks here..'
            value={submitData.techSuggests}
            onChange={handleChange}>
          </input>
          <div className='buttonDiv'>
          <button onClick={handleSubmit} className='submitButton'>Submit</button>
          </div>
        </form>
      </div>
    )
}

export default SubmissionForm
