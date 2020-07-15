import React from 'react'

function Person({persn}) {
  return (
    <div>
      <h1>I am {persn.name}. My Skills are {persn.skill}</h1>
    </div>
  )
}

export default Person
