//import required react modules
import React from 'react';

import { hasUserWon } from '../winningConditions.js';
import { Square } from './Square.js';

export class Board extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  setSquareValue(i){
    const squares = this.state.squares.slice();

    let _hasUserWon = hasUserWon(squares)? true: false;
    let isSquareFilled = squares[i]? true: false;

    if(_hasUserWon || isSquareFilled){
      return;
    }

    //next move
    squares[i] = this.state.xIsNext? 'X':'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }

  renderSquare(i) {
    return (
      <Square value={this.state.squares[i]}
            onClick={() => this.setSquareValue(i)}
      />
    );
  }

  render() {
    const winner = hasUserWon(this.state.squares);

    let status;
    let hasWinner = winner? true: false;

    if (hasWinner){
      status = 'Winner: ' + winner;
    } else{
      status = 'Next player: ' + (this.state.xIsNext? 'X': 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
