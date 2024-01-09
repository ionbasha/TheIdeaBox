import React, { useEffect } from 'react'

const Home = () => {
  
  useEffect(() => {
    console.log("Hello")
  })

  return (
    <div className='displayedContent'>
      <div className='topPage'>
        <h1>TheIdeaBox</h1>
        <p>Put your coding project ideas here!</p>
      </div>
    </div>
  )
}

export default Home

