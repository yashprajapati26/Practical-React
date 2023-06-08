import React from 'react'

function CountClick({count, incrementCount}) {
  
  return (
   <div>
     <button onClick={incrementCount}>CountClick {count}</button>
   </div>
  )
}

export default CountClick