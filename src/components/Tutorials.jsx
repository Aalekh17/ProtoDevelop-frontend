import React from 'react'
import './tutorials.css'

const Tutorials = () => {
  return (
    <div id="tutback">
      <p id="tuthead">Learn from the Tutorials...</p>
      <div id="tutcard">
        <p id="tuttitle">Github Basics</p>
        <iframe src="https://www.youtube.com/embed/Ez8F0nW6S-w" frameborder="0" id="tutiframe"></iframe>
      </div>
      <div id="tutcard">
        <p id="tuttitle">Deployment Basics</p>
        <iframe src="https://www.youtube.com/embed/c2A5XJidIDA" frameborder="0" id="tutiframe"></iframe>
      </div>
    </div>
  )
}

export default Tutorials
