import React, { useState } from 'react';

function Say() {
  const [message,setMessage] = useState('');
  const [number, setNumber] = useState(0);
  const [color,setColor] = useState('black');


  const ins = () => {
    setMessage('들어옴');
    setNumber(number+1);
  }
  const out  = () => {
    setMessage('나감')
    setNumber(number-1);
  }
  return(
    <div>
      <h2 style={ {color} } >{message}</h2><br />
      <h3>들어온 횟수 : {number}</h3>
      <button onClick={ins}>입장</button>
      <button onClick={out}>퇴장</button><br />
      
      <button style={{color:'red'}} onClick= { () => setColor('red')}>빨간색</button>
      <button style={{color:'blue'}} onClick= { () => setColor('blue')}>파랑색</button>
      <button style={{color:'yellow'}} onClick= { () => setColor('yellow')}>노랑색</button>
    </div>
  )
}

export default Say;