import React, { memo } from 'react'

function UseMemo({ todos }) {
  console.log('Here we Apply memo')
  return (
    <div className='text-center py-10 '>
      <h2>Here we Apply memorization with React.memo</h2>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>
      })}
    </div>
  )
}

export default memo(UseMemo)
