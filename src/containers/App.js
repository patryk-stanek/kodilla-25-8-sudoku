import React from 'react';
import {hot} from 'react-hot-loader';
import sudoku from 'sudoku-umd';

import style from './App.css';

import Board from '../components/Board/Board.js';
import Controls from '../components/Controls/Controls.js';
import Numbers from '../components/Numbers/Numbers.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialBoard: [],
            board: [],
            game: ''
        }
        this.newGame = this.newGame.bind(this);
        this.solve = this.solve.bind(this);
        this.reset = this.reset.bind(this);
        this.check = this.check.bind(this);
    }

    componentWillMount() {
        const init = sudoku.generate('easy');
        const array = init.split('');
        this.setState({initialBoard: array, board: array});
    }

    newGame() {
        this.setState({board: []});
        const init = sudoku.generate('easy');
        const array = init.split('');
        this.setState({board: array, initialBoard: array});
    }

    reset() {
        this.setState({board: this.state.initialBoard});
    }

    solve() {
        const init = sudoku.solve(this.state.board);
        const array = init.split('');
        this.setState({board: array})
    }

    check() {
        let init = sudoku.solve(this.state.initialBoard);
        const compare = this.state.board;
        const convert = compare.join('');

        init == convert ? this.setState({game: 'Win'}) : this.setState({game: 'Lose'});
    }
    
    render() {
        return (
            <div className={style.Main}>
                <button onClick={this.newGame}>New Game</button>
                <h1>Sudoku</h1>
                <Board data={this.state.board}/>
                <button onClick={this.solve}>Solve</button>
                <button onClick={this.reset}>Reset</button>
                <button onClick={this.check}>Check</button>
                <h2>{this.state.game}</h2>
                <Numbers />
                <Controls />
            </div>
        )
    }
}

export default hot(module)(App);