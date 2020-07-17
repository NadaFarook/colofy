import React from 'react';
import Colorgen from './Colorgenerator'
import Gradient from './Gradient'
import Main from './main'
import {HashRouter as Router , Route , Switch } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/generate" component={Colorgen}/>
        <Route path="/gradient" component={Gradient}/>
        <Route path="/" component={Main}/>
        </Switch>
    </div>
    </Router>
  );
}
document.addEventListener('keyup', function(e){
  if(e.keyCode === 32)
    window.location.reload();
})


export default App;
