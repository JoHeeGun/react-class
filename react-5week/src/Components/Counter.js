import React, { useState } from 'react';


function Counter() {
  const [numberz, setNumber] = useState(0);
  const plus = () => {
    setNumber(numberz + 1);
  }
  const minus = () => {
    setNumber(numberz - 1);
  }
  
  return(
    <div>
      <h1>{numberz}</h1>
      <button onClick={plus}>더하기</button>
      <button onClick={minus}>빼기</button>
    </div>
  )
}

export default Counter;