import React from 'react';
import {hot} from 'react-hot-loader';

import style from './App.css';

import Board from '../components/Board/Board.js';
import Controls from '../components/Controls/Controls.js';
import Numbers from '../components/Numbers/Numbers.js';

class App extends React.Component {
    
    render() {
        return (
            <div className={style.Main}>
                <h1>Hello world!</h1>
                <Board />
                <Numbers />
                <Controls />
            </div>
        )
    }
}

export default hot(module)(App);