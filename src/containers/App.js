import React from 'react';
import {hot} from 'react-hot-loader';
import sudoku from 'sudoku-umd';

import style from './App.css';

import Board from '../components/Board/Board.js';
import Numbers from '../components/Numbers/Numbers.js';

class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
          board: [],
          game: '',
          difficulty: ''
      }

      this.solvedGame = [];
      this.initialBoard = [];

      this.updateBoard = this.updateBoard.bind(this);
      this.newGame = this.newGame.bind(this);
      this.solve = this.solve.bind(this);
      this.reset = this.reset.bind(this);
      this.check = this.check.bind(this);

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
      this.newGame('easy');
    }

    newGame(difficulty) {
      const initialGameSetup = sudoku.generate(difficulty);
      const gameArray = initialGameSetup.split('');

      this.setState({ board: gameArray, game: '', difficulty: difficulty });

      this.solvedGame = sudoku.solve(initialGameSetup);
      this.initialBoard = initialGameSetup;
    }

    solve() {
      const newFinishedGame = this.solvedGame.split('');

      this.setState({board: newFinishedGame});
    }

    updateBoard(id, newVal) {
      const updatedBoard = this.state.board;

      updatedBoard[id] = newVal;

      this.setState({
        board: updatedBoard
      });
    }

    reset() {
      const initialBoard = this.initialBoard.split('');

      this.setState({board: initialBoard});
    }

    check() {
      const presentGame = this.state.board;
      const convertGame = presentGame.join('');

      this.solvedGame == convertGame ? this.setState({game: 'Win'}) : this.setState({game: 'Lose'});
    }

    handleSubmit(event) {
      event.preventDefault();
      this.newGame(this.state.difficulty);
    }

    handleChange(event) {
      this.setState({difficulty: event.target.value});
    }

    render() {
      return (
        <div className={style.Main}>
          <form onSubmit={this.handleSubmit}>
            <select value={this.state.difficulty} onChange={this.handleChange}>
              <option value='easy'>Easy</option>
              <option value='medium'>Medium</option>
              <option value='hard'>Hard</option>
            </select>
            <input type='submit' value='Start New Game'/>
          </form>

          {this.state.board && (
            <Board data={this.state.board} onBoardUpdate={this.updateBoard}/>
          )}
          <button onClick={this.solve}>Solve</button>
          <button onClick={this.reset}>Reset</button>
          <button onClick={this.check}>Check</button>
          <h2>{this.state.game}</h2>
          <br/>
          <Numbers />
        </div>
      )
    }
}

export default hot(module)(App);