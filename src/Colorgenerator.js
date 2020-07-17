import React from 'react';
import './App.css';



  
const randomColor1 =Math.floor(Math.random()*16777215).toString(16);
const Color1 = '#'+randomColor1
   
const randomColor2 =Math.floor(Math.random()*16777215).toString(16);
const Color2 = '#'+randomColor2

const randomColor3 =Math.floor(Math.random()*16777215).toString(16);
const Color3 = '#'+randomColor3

const randomColor4 =Math.floor(Math.random()*16777215).toString(16);
const Color4 = '#'+randomColor4

const randomColor5 =Math.floor(Math.random()*16777215).toString(16);
const Color5 = '#'+randomColor5

 function reload() {
    window.location.reload(false);
 }
 


function Colorgen() {
    
  return (
      <div className="maindiv">
    <div className="App">
     <div style={{backgroundColor:Color1}}  className="box1 box whiteh2"><h2>{Color1}</h2></div>
  <div style={{backgroundColor:Color2}}  className="box2 box whiteh2"><h2>{Color2}</h2></div>
     <div style={{backgroundColor:Color3}} className="box3 box whiteh2"><h2>{Color3}</h2></div>
     <div style={{backgroundColor:Color4}} className="box4 box whiteh2"><h2>{Color4}</h2></div>
     <div style={{backgroundColor:Color5}} className="box5 box whiteh2"><h2>{Color5}</h2></div>

    </div>
    <nav className="bottom"><button onClick ={reload}>GENERATE</button> </nav>
    </div>
  );
}

export default Colorgen;