import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header';
import Hello from './Components/Hello';
import Profile from './Components/Profile';
import MyComponent from './Components/MyComponent';


const faker = {
  name: "faker",
  age:"26"
};

const chovy = {
  name: "chovy",
  age:"22"
};

class App extends Component{ 
  render(){
    return (
      <div>
        <h1>react class 3week</h1>
        <Header title="사이트 제목입니다." />
        <Hello name="heegun" />
        <Profile data={faker} />
        <Profile data={chovy} />
        <MyComponent favoriteNumber={3} name="jo">children값! </MyComponent>
      </div>
    );
  }
  
}

export default App;
