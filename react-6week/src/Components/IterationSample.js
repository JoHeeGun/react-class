import React,{useState} from 'react';

const IterationSample = () =>{
  const [names,setNames] = useState([
    {id:1, text:'눈사람'},
    {id:2, text:'얼음'},
    {id:3, text:'눈'},
    {id:4, text:'바람'}
  ]); 

  const [input,setInput] = useState('');
  const [nextid,setNextid] = useState(5);
  
  const change = (e) => {
    setInput(e.target.value)
  }

  const add = () => {
    const nextNames = names.concat({
      id:nextid,
      text:input
    });
    setNextid(nextid+1);
    setNames(nextNames);
    setInput('');
  }
  const remove = (id) =>{
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  }

  const nameList = names.map(name => 
    <li key={name.id} onDoubleClick={() => remove(name.id)}>{name.text}</li>);

  return(
    <div>
      <input type="text" onChange={change}/>
      <button onClick={add}>추가하기</button>
      <ul>{nameList}</ul>
    </div>
  )
}


export default IterationSample;