import React,{Component} from 'react'
import {Link} from'react-router-dom';


class reactRouter1 extends Component {
  render(){
    return (
      <div>
        <h1>path='/'</h1>
        <h3>reactRouter1입니다</h3>
        <Link to={'reactRouter2'}>reactRouter2</Link>
      </div>
    )
  }
}

export default reactRouter1;