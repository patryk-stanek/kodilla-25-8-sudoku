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
            board: []
        }
        this.sudoku = this.sudoku.bind(this);
    }

    componentWillMount() {
        const x = sudoku.generate('easy');
        const y = x.split('');
        this.setState({initialBoard: y, board: y});
    }

    sudoku(){
        const x = sudoku.generate('easy');
        const y = x.split('');
        this.setState({board: y});
    }
    
    render() {
        return (
            <div className={style.Main}>
                <button onClick={this.sudoku}>sudoku</button>
                <h1>Sudoku</h1>
                <Board data={this.state.board}/>
                <Numbers />
                <Controls />
            </div>
        )
    }
}

export default hot(module)(App);