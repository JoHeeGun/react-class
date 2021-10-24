
import './App.css';
import React from 'react';
import {Route,Switch,Link} from 'react-router-dom';
import Home from './Home'
import About from './About'
import HistorySample from './HistorySample'

function App() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/history">HistorySample</Link></li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path={['/about','/info']} component={About} />
        <Route path="/history" component={HistorySample} />
        <Route
        render={({location})=>(
          <div>
            <h2>존재하지 않는 페이지입니다.</h2>
            <p>{location.pathname}</p>
          </div>
        )}
        />
      </Switch>
    </div>
  );
}

export default App;
