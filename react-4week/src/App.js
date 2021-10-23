import './App.css';
import React,{Fragment} from 'react'
import IterationSample from './Components/IterationSample';

function App() {
  const name = "jo"
  const style = {
    color:'aqua',
    backgroundColor:'black'
  }
  return (
    <Fragment>

      <h3>react-class 4week</h3>
      <h4>fragment 작동여부 확인!</h4>

      {name==="jo"
      ?(<h2>이름은 {name}</h2>)
      :null}

      <h3  style = {style} //시작태그엔 주석가능
      >React!!!!!</h3>

      <div className="reactcss" >
        {name}
      </div>
      <input />
      {/* 주석달고싶다 */}
      <IterationSample />

    </Fragment>
  );
}

export default App;
