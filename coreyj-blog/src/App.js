import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from
'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Books from './components/pages/Books';
import Influences from './components/pages/Influences';
import Travel from './components/pages/Travel';
import Perspective from './components/pages/Perspective';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/books' component={Books}/>
            <Route path='/influences' component={Influences}/>
            <Route path='/travel' component={Travel}/>
            <Route path='/perspective' component={Perspective}/>
        </Switch>
      </Router>

    </>
  );
}

export default App;
