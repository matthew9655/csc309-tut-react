import React from 'react'
import './App.css';
import Display from "./components/Display.js"
import Board from "./components/Board.js"

class App extends React.Component {
    constructor() {
        super();
        // TODO: create the state variable where result = "" and resetOnNext =  false
        
    }

    onClick(button) {
        if(button === "="){
            this.calculate();
        }
        else if(button === "AC"){
            this.reset();
        }
        else {
            if (this.state.resetOnNext) {
                // TODO: set the state of result to button and resetOnNext to false
                
            } else {
                // TODO: set the state of result to result + button
              
            }
        }
    };


    calculate() {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+');
        }
        else {
            checkResult = this.state.result;
        }
  
        try {
            // eslint-disable-next-line
            const ans = eval(checkResult);
  
            if (!isFinite(ans)) {
              this.setState({
                  result: "Infinity",
                  resetOnNext: true
              });
            } else {
              const isDecimal = (ans- Math.floor(ans)) !== 0;
              this.setState({
                // eslint-disable-next-line
                  result: ((isDecimal ? ans.toPrecision(8) :  ans) || "" ) + "",
              });
            }
            
        } catch (e) {
            this.setState({
                result: "error",
                resetOnNext: true
            });
        }
      };

  reset(){
        this.setState({
            result: "",
            resetOnNext: false
        });
  };

  render() {
      return (
          <div className="App">
              <div className="calculator-body">
                  {/* TODO:  Create the Display and Board tags. 
                  Look at Board and Display and see what you need to pass in.*/}

              </div>
          </div>
      );
  }
}

export default App;
