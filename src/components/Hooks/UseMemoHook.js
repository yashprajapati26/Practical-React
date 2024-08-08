import React, { useMemo, useState } from 'react'
const calculation = (value) => {
  console.log('called calculation function')
  let result = 0
  for (let i = 1; i <= value; i++) {
    result += i
  }
  return Math.ceil(result)
}

const UseMemoHook = ({ value }) => {
  const Result = useMemo(() => calculation(value), [value])

  return (
    <div className="text-center p-5">
      <p> Result: {Result}</p>
    </div>
  )
}

export default UseMemoHook
