import React, { useState, useEffect } from 'react'
import './App.css';
import Display from "./components/Display.js"
import Board from "./components/Board.js"
import Wheel from '@uiw/react-color-wheel';
import { hsvaToHex } from '@uiw/color-convert';

function App() {
    
  const [result, setResult] = useState("");
  const [resetOnNext, setResetOnNext] = useState(false);
  const [boardOrDisplay, setBoardOrDisplay] = useState(true);

  //  TODO: create the state variable numEquations and setNumEquations using the useState hook


  // TODO:create the state variable hsvaDisplay and setHsvaDisplay using the useState hook
  // check the react-color-wheel documentation

  // create the state variable hsvaBoard and setHsvaBoard using the useState hook
  // check the react-color-wheel documentation


  // TODO: use the useEffect hook log when we calculate an equation.


  function onClick(button) {
    if(button === "="){
        calculate();
    }
    else if(button === "AC"){
        reset();
    }
    else {
        if (resetOnNext) {
          setResult(button);
          setResetOnNext(false);
        } else {
          setResult(result + button);
        }
    }
  };

  function calculate() {
    var checkResult = ''
    if(result.includes('--')){
        checkResult = result.replace('--','+');
    }
    else {
        checkResult = result;
    }

    try {
        // eslint-disable-next-line
        const ans = eval(checkResult);

        if (!isFinite(ans)) {
          setResult("Infinity");
          setResetOnNext(true);
        } else {
          // TODO: increase the state of numEquations by 1
          
          const isDecimal = (ans- Math.floor(ans)) !== 0;
          setResult(((isDecimal ? ans.toPrecision(8) :  ans) || "" ) + "");
        }
        
    } catch (e) {
      setResult("error");
      setResetOnNext(true);
    }
  };

  function reset(){
    setResult("");
    setResetOnNext(false);
  };

  function swapBoardAndDisplay() {
    if (boardOrDisplay) {
      setBoardOrDisplay(false);
    } else {
      setBoardOrDisplay(true);
    }
  }

  return (
    <div className='App'>
        <div className="calculator-body">
            {/* TODO:  pass the prop hex to the display and board child components. the hsvatoHex
            helper function has been imported for you these are the original tags:
            <Display result={this.state.result}/>
            <Board onClick={button => this.onClick(button)}/> */}
      
        </div>
        <div className='wheel-container'>
          <div className='swap-button' onClick={() => swapBoardAndDisplay()}>
            {boardOrDisplay ? 'Display' : 'Board'}
          </div>
          {/* TODO: Create the wheel tag. Look at the package on how to create it. We only use 1 wheel
          to change the colors of both display and board, how can we do that with both color states.
          Hint: look at the swap-button div*/}
        
        </div>
    </div>
  );
}
export default App;
