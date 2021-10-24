import React,{useState} from 'react';

function Quiz(){
  const [name,setName] = useState('');
  const [nickname,setNickname] = useState('');

  const changename = (e) => {
    setName(e.target.value)
  }

  const changenickname = (e) => {
    setNickname(e.target.value)
  }

  return(
    <div>
      <input type="text" value={name} onChange={changename}/>
      <input type="text" value={nickname} onChange={changenickname}/><br />
      이름 : {name} <br />
      닉네임 : {nickname}
    </div>
  )
}
export default  Quiz;