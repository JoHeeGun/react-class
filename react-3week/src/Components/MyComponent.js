import React,{Component} from 'react';
import PropTypes from 'prop-types';


class MyComponent extends Component {
  static defaultPorps = {
    name:'기본이름',
    favoriteNumber:'20'
  };
  static propTypes = {
    name:PropTypes.string,
    favoriteNumber:PropTypes.number.isRequired
  };
  render(){
    const {name , favoriteNumber , children} = this.props
    return (
      <div>
        저의 이름은 {name} 입니다.<br />
        children 값은 {children}입니다.<br />
        가장 좋아하는 숫자는 {favoriteNumber} 입니다.
      </div>
    );  
  }
};

MyComponent.defaultProps = {
  name:'기본이름'
};

export default MyComponent;