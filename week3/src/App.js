import React, { useState, useEffect } from 'react'
import './App.css';
import Display from "./components/Calculator/Display.js"
import Board from "./components/Calculator/Board.js"
import Wheel from '@uiw/react-color-wheel';
import { hsvaToHex } from '@uiw/color-convert';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    
  const [result, setResult] = useState("");
  const [resetOnNext, setResetOnNext] = useState(false);
  const [numEquations, setNumEquations] = useState(0);
  const [hsvaDisplay, setHsvaDisplay] = useState({ h: 0, s: 0, v: 68, a: 1 });
  const [hsvaBoard, setHsvaBoard] = useState({ h: 0, s: 0, v: 68, a: 1 });
  const [boardOrDisplay, setBoardOrDisplay] = useState(true);

  useEffect(() => {
    console.log(`we have calculated ${numEquations} equations!`);
  }, [numEquations]);

  // useEffect(() => {
  //   console.log(`${hsvaDisplay.h}, ${hsvaDisplay.s}, ${hsvaDisplay.v}`);
  //   console.log(`${hsvaBoard.h}, ${hsvaBoard.s}, ${hsvaBoard.v}`);
  // });

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
          setNumEquations(numEquations + 1);
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
            <Display hex={hsvaToHex(hsvaDisplay)}result={result}/>
            <Board  hex={hsvaToHex(hsvaBoard)} onClick={button => onClick(button)}/>
        </div>
        <div className='wheel-container'>
          <div className='swap-button' onClick={() => swapBoardAndDisplay()}>{boardOrDisplay ? 'Display' : 'Board'}</div>
          <Wheel
            className='wheel'
            color={boardOrDisplay ? hsvaDisplay : hsvaBoard}
            onChange={(color) => {
              boardOrDisplay ? setHsvaDisplay({ ...hsvaDisplay, ...color.hsva })
                : setHsvaBoard({ ...hsvaBoard, ...color.hsva });
            }}
          />
        </div>
    </div>
  );
}
export default App;
