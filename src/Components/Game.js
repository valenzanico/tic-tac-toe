import React, { Component } from 'react'
import Board from './Board'
import Button from '@material-ui/core/Button'
import './game.css'


const container = {
  padding: '0.5rem',
  borderRadius: '10px',
  border: '1px solid blue',
  background: '#5677fc',
  textAlign: 'center'
}



class Game extends Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [
          {
            squares: Array(9).fill(null)
          }
        ],
        stepNumber: 0,
        xIsNext: true,
        match: false,
      };
    }
  
    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      const {gameturns} = this.props
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? gameturns[0].a : gameturns[0].b ;
      this.setState({
        history: history.concat([
          {
            squares: squares
          }
        ]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      });
    }
  
    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
      });
    }
  
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);

      const {gameturns} = this.props
      const {disablechuser} = this.props
      const {switchdisable} = this.props

      if (this.state.stepNumber !== 0 && switchdisable===false){
        disablechuser()
      } else if (this.state.stepNumber === 0 && switchdisable===true) {
        disablechuser()
      }
      if (this.state.stepNumber === 1 && this.state.match === false) {
        this.setState({match: true})}
      else if (this.state.stepNumber === 9 && this.state.match === true) {
        this.setState({match: false})
      }

      let status;
      if (winner) {
        status = "Winner: " + winner;
      }
      else if (this.state.stepNumber === 9) {
        status = "Draw";
      }
      else if (this.state.stepNumber !== 9){
        status = "Next player: " + (this.state.xIsNext ? gameturns[0].a : gameturns[0].b );
     
     
     }
  
      return (
        <div style={container} className="Container">
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={i => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div className="game-status">{status}<br /><Button className="gamestartbtn" variant="contained" color="primary" onClick={() => this.jumpTo(0)}>Go to game start</Button></div>
          </div>
        </div>
        </div>
      );
    }
  }





  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }


export default Game