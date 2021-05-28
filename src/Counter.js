import React from 'react'
import {useState} from 'react'

function Counter() {


  const [counter, setCounter] = useState(0);
  const incrementByTwo = () => {
      setCounter(counter + 1);
      setCounter(counter + 1);
      console.log({counter})
  }
    return (
        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={incrementByTwo}>Increment Counter</button>
        </div>
    )
}

export default Counter