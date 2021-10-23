import React, { useState } from 'react';
import './App.css';

function App() {
  const posts = '블로그프로그래밍'
  const [likebutton,setLikeButton] = useState(0);
  const [title,setTitle] = useState('첫번째 타이틀');

  const like =()=> {
    setLikeButton(likebutton +1);
  }
  function changeTitle(){
    var newTitle = [...title];
    newTitle = '두번째 타이틀';
    setTitle(newTitle);
  }

  return (
    <div className="App">
      <div className="Blog-nav">Blog 예제</div>
      <h4>{posts}</h4>
      <h4>{title}</h4>
      <button onClick={changeTitle}>제목 변경</button>
      <h4>좋아요<span onClick={like}>👍</span>{likebutton}</h4>
    </div>
  );
}

export default App;
