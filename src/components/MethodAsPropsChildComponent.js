import React from 'react'

function MethodAsPropsChildComponent(props) {
  return (
    <div>
        <div>
            {/* Calling Parent Component Handler */}
            <button onClick={() => props.greetHandler(document.getElementById('tbox').value)}>Greet</button>
        </div>
        
        <div>
            {/* Passing value to the parent component */}
            <input id= 'tbox' type='text'/>
            <button onClick={() => props.greetHandler(document.getElementById('tbox').value)}>Greet</button>
        </div>
        
    </div>
  )
}

export default MethodAsPropsChildComponent
        