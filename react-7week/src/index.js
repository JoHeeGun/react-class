// ./src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch,NavLink}from'react-router-dom';
import About from './pages/About'
import Header from './pages/Header'
import reactRouter1 from './Components/reactRouter1';
import reactRouter2 from './Components/reactRouter2';

import './index.css';

function Home(){
    return (
        <div>
            <h2>Home</h2>
            Home...
        </div>
    )
}

function Topics(){
    return (
        <div>
            <h2>Topics</h2>
            Topics...
        </div>
    );
}

function Contact(){
    return (
        <div>
            <h2>Contact</h2>
            Contact...
        </div>
    )
}

function App(){
    return (
        <div>
            <h1>React Router DOM</h1>
            <Header />
            <hr />
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/topics">Topics</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <hr />
            <ul>
                <li><NavLink exact to="/" >Home</NavLink></li>
                <li><NavLink to="/topics">Topics</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <hr />
            <ul>
                <Switch>
                    <Route path="/topics" component={Topics}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/about" component={About}/>
                    <Route path="/reactrouter1" component={reactRouter1}/>
                    <Route path="/reactrouter2" component={reactRouter2}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </ul>
        </div>
    )
}

ReactDOM.render(
<Router>
<App />
</Router>, 
document.getElementById('root'));