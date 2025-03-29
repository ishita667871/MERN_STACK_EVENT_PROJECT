import React from 'react'

const Footer = () => {
  return (
   <footer>
    <div className="banner">
      <div className="title">
      <h1>Event Planner </h1>
      <p> Events and Weddings</p>
    </div>
    <div className="tag">
      <label> NEWS LETTER</label>
      <div>
        <input type="text" placeholder="EMAIL"/>
      </div>
      <p> Sign up with your email to recieve news and updates</p>
    </div>
    </div>
   </footer>
  )
}

export default Footer