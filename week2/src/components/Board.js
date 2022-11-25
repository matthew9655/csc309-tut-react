import React from 'react';
import './Board.css'

function Square(props) {
    return (
      <button className="square" style={{backgroundColor: props.hex}} onClick={props.onClick}>
        {props.value}
      </button>
    );
  }

class Board extends React.Component {
    renderSquare(i) {
        return (
          <Square
            value={i}
            onClick={() => this.props.onClick(i)}
            hex={this.props.hex}
          />
        );
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare("1")}
                    {this.renderSquare("2")}
                    {this.renderSquare("3")}
                    {this.renderSquare("+")}
                </div>
                <div className="board-row">
                    {this.renderSquare("4")}
                    {this.renderSquare("5")}
                    {this.renderSquare("6")}
                    {this.renderSquare("-")}
                </div>
                <div className="board-row">
                    {this.renderSquare("7")}
                    {this.renderSquare("8")}
                    {this.renderSquare("9")}
                    {this.renderSquare("*")}
                </div>
                <div className="board-row">
                    {this.renderSquare("AC")}
                    {this.renderSquare("0")}
                    {this.renderSquare("=")}
                    {this.renderSquare("/")}
                </div>
            </div>
        );
    }
  }

  export default Board;