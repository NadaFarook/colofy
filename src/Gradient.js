import React from 'react';
import './App.css';

function Gradient() {
   
  return (
    <div className="secondpage">
      <nav> <h1>THE COLOFY GRADIENTS</h1>
        <p>Top trending grads to choose from...</p>
        </nav>
        <div className="allgrads">
      <div className="grad1">
        <button style={{backgroundImage:"linear-gradient(45deg, #3a1c71,#d76d77 , #ffaf7b )"}}>The Relay Gradient</button>
        <button className="csscodebutton" style={{height:'50px'}} onClick={()=> navigator.clipboard.writeText('background-image:linear-gradient(45deg ,#3a1c71  ,#d76d77 , #ffaf7b )')}>CLICK HERE TO COPY CSS CODE</button>
        <div className="threebutton"><h1>#3a1c71</h1><h1>#d76d77</h1><h1>#ffaf7b</h1></div>
      </div>

      <div className="grad2">
        <button style={{backgroundImage:"linear-gradient(45deg, #bd7fff,#758aff , #ff7f7f )"}}>The Midnight Glory</button>
        <button className="csscodebutton" style={{height:'50px'}} onClick={()=> navigator.clipboard.writeText('background-image:linear-gradient(45deg ,#3a1c71  ,#d76d77 , #ffaf7b )')}>CLICK HERE TO COPY CSS CODE</button>
        <div className="threebutton"><h1 id="jo">#bd7fff</h1><h1>#758aff</h1><h1>#ff7f7f</h1></div>
      </div>

      <div className="grad3">
        <button style={{backgroundImage:"linear-gradient(45deg, #363553,#903775 , #e8458b )"}}>The Purple Playdate</button>
        <button className="csscodebutton" style={{height:'50px'}} onClick={()=> navigator.clipboard.writeText('background-image:linear-gradient(45deg ,#3a1c71  ,#d76d77 , #ffaf7b )')}>CLICK HERE TO COPY CSS CODE</button>
        <div className="threebutton"><h1>#363553</h1><h1>#903775</h1><h1>#E8458b</h1></div>
      </div>

      <div className="grad4">
        <button style={{backgroundImage:"linear-gradient(45deg, #ea5a6f,#de791e , #fccf3a )"}}>The Mango Madness</button>
        <button className="csscodebutton" style={{height:'50px'}} onClick={()=> navigator.clipboard.writeText('background-image:linear-gradient(45deg ,#3a1c71  ,#d76d77 , #ffaf7b )')}>CLICK HERE TO COPY CSS CODE</button>
        <div className="threebutton"><h1>#ea5agf</h1><h1>#de791e</h1><h1>#fccf3a</h1></div>
      </div>

      <div className="grad5">
        <button style={{backgroundImage:"linear-gradient(45deg, #276174,#33c58e , #63fd88 )"}}>The Lush Green</button>
        <button className="csscodebutton" style={{height:'50px'}} onClick={()=> navigator.clipboard.writeText('background-image:linear-gradient(45deg ,#3a1c71  ,#d76d77 , #ffaf7b )')}>CLICK HERE TO COPY CSS CODE</button>
        <div className="threebutton"><h1>#276174</h1><h1>#33c58e</h1><h1>#63fd88</h1></div>
      </div>

      <div className="grad6">
        <button style={{backgroundImage:"linear-gradient(45deg, #310c41,#351e92 , #4466ff )"}}>The Royal Blue </button>
        <button className="csscodebutton" style={{height:'50px'}} onClick={()=> navigator.clipboard.writeText('background-image:linear-gradient(45deg ,#3a1c71  ,#d76d77 , #ffaf7b )')}>CLICK HERE TO COPY CSS CODE</button>
        <div className="threebutton"><h1>#310c41</h1><h1>#351e92</h1><h1>#4466ff</h1></div>
      </div>

      <div className="grad7">
        <button style={{backgroundImage:"linear-gradient(45deg, #37ffd7,#c7ffc2 , #fffdaa )" , color:"black" }}>The Cool Guy</button>
        <button className="csscodebutton" style={{height:'50px'}} onClick={()=> navigator.clipboard.writeText('background-image:linear-gradient(45deg ,#3a1c71  ,#d76d77 , #ffaf7b )')}>CLICK HERE TO COPY CSS CODE</button>
        <div className="threebutton"><h1>#37ffd7</h1><h1>#c7ffc2</h1><h1>#fffdaa</h1></div>
      </div>

      <div className="grad1">
        <button style={{backgroundImage:"linear-gradient(45deg, #ffcda5,#ff8f8f , #ee4d5f )"}}>The Pretty Peach</button>
        <button className="csscodebutton" style={{height:'50px'}} onClick={()=> navigator.clipboard.writeText('background-image:linear-gradient(45deg ,#3a1c71  ,#d76d77 , #ffaf7b )')}>CLICK HERE TO COPY CSS CODE</button>
        <div className="threebutton"><h1>#ffcda5</h1><h1>#ff8f8f</h1><h1>#ee4d5f</h1></div>
      </div>
      </div>
    </div>
  );
}

export default Gradient;