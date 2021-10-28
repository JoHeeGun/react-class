import React,{useState,useEffect} from "react";

function RuseEffect(props){
  const[contents,setContents] = useState('this is react');
  const [numberz, setNumber] = useState(0);

  const plus = () => {
    setNumber(numberz + 1);
  }
  const minus = () => {
    setNumber(numberz - 1);
  }

  useEffect(()=>{                     //처음에 실행 , []안에 있는 state변경시 실행
    console.log('useEffect 실행!');
  },[contents,numberz]) 
  

  const changeContents = () =>{
    setContents(prev => prev ==="this is hook" ? "this is react!" : "this is hook")
  }
  return(
    <div>
      <h2>{contents}</h2>
      <button onClick={changeContents}>Contents 변경</button>
      <h1>{numberz}</h1>
      <button onClick={plus}>더하기</button>
      <button onClick={minus}>빼기</button>
    </div>
  )
}

export default RuseEffect;