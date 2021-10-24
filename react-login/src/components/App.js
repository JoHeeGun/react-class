import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import LoginForm from './LoginForm'

// css
import '../css/new.css';

// header
import HeaderAdmin from './Header/Header admin';

// footer
import Footer from './Footer/Footer';

class App extends Component {
  render () {
    return (
      <div >
        <HeaderAdmin/> 
        <Route exact path="/" component={LoginForm} />
        <Footer/>
      </div>
    );
  }
}

export default App;