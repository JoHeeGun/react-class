import React, {Component} from 'react';

//클래스형 컴포넌트를 이용하여 state를 처리하는 방식
class EventPractice extends Component{
    state = {
      username:''
    };
    constructor(props){
      super(props);
      this.inputChange = this.inputChange.bind(this);
      this.buttonClick = this.buttonClick.bind(this);
    }

    inputChange(e) {
      this.setState({
        username:e.target.value
      })
    }
    buttonClick(){
      alert(this.state.username);
      this.setState({
        username:''
      });
    }
    render() {
      return (
        <div>
          <h1>이벤트 연습(Components)</h1>
          <input 
          type="text"
          name="username"
          placeholder="사용자이름"
          value={this.state.username}
          onChange={this.inputChange}
          />
          <button
          onClick={ () => {
            alert(this.state.username);
            this.setState({
              username:''
            })
          }}
          >확인버튼</button>
        </div>     
        );
    }
  }


export default EventPractice;