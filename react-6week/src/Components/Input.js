import React,{useState} from 'react';

//함수형 이벤트 연습
function Input(){
  const [text,setText] = useState('');
  
  const reset = () => {
    setText('');
  }

  const Change = (e) => {
    setText(e.target.value)
  }
  return(
    <div>
      <input value={text} onChange={Change} />
      <button onClick={reset}>초기화버튼</button>
      <div>
        값:{text}
      </div>
    </div>
  )
}

export default Input;