import React, { useState } from 'react'
import UseMemo from './Hooks/UseMemo';

function Todos() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["todo 1", "todo 2"]);
  
    const increment = () => {
      setCount((c) => c + 1);
    };
    console.log('Update Components')
  
    return (
      <div className='text-center border border-black m-5'>
        <UseMemo todos={todos} />
        <hr />
        <div className=''>
          Count: {count}
          <button className='bg-blue-500 text-white p-2 mx-5 px-10 rounded' onClick={increment}> increment </button>
        </div>
      </div>
    );
}

export default Todos