import React,{Component} from 'react';

class HistorySample extends Component {
  Back = () => {
    this.props.history.goBack();
  };
  Home = () => {
    this.props.history.push('/');
  }

  componentDidMount(){
    this.unblock = this.props.history.block('정말 떠나시겠습니까?');
  }
  componentWillUnmount() {
    if(this.unblock){
      this.unblock();
    }
  }

  render(){
    return(
      <div>
        <button onClick={this.Back}>뒤로</button>
        <button onClick={this.Home}>홈으로</button>      
      </div>
    );
  }
}

export default HistorySample;