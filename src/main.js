import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'


function Main() {
  return (
    <div className="main">
    
    <nav className="top"><h1>Colofy</h1></nav>
    <p>Want some amazing colors palletes for your project and can’t decide one??
Worry no more !!</p>
    <h2>Colofy is a one stop platform to
       get some ramdom generated colors , choose from
        best of color palletes or even get some color gradient pallete ideas.</h2>
  <div className="all-links"><Link to="/generate"> <button>Generate Color</button></Link>
   <Link to="/gradient"> <button>Gradient Pallete</button></Link>
    </div></div>
  );
}

export default Main;