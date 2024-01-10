import React from 'react'
import { useState } from 'react'

const SubmissionForm = () => {

const [radioSelect, setRadioSelect] = useState('')

const handleChange = e => {
    setRadioSelect(e.target.value)
}

const handleSubmit = e => {
    e.preventDefault()
}
    
  return (
    <div className='formDiv'>
      <form>
        <h1>Submit a new project idea</h1>
        <br/>
        <br/>
        <label>Title</label>
        <input type={'text'} placeholder='Enter project title here..'></input>
        <label>Description</label>
        <input type={'text'} placeholder='Enter project description here..'></input>
        <label>Difficulty</label>
        <div className='radioButtons'>
            <label>Beginner</label>
            <input type={'radio'} value = 'Beginner' onChange={handleChange} checked={radioSelect === 'Beginner'}></input>
            <label>Intermediate</label>
            <input type={'radio'} value = 'Intermediate' onChange={handleChange} checked={radioSelect === 'Intermediate'}></input>
            <label>Expert</label>
            <input type={'radio'} value = 'Expert' onChange={handleChange} checked={radioSelect === 'Expert'}></input>
        </div>
        <label>Programming Language(s) / framework suggestions</label>
        <input type={'text'} placeholder='Enter suggested languages and frameworks here..'></input>
        <button onClick={handleSubmit} className='submitButton'>Submit</button>
      </form>
    </div>
  )
}

export default SubmissionForm
