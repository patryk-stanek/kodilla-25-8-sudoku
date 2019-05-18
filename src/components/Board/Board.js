import React from 'react';
import style from './Board.css';

import Tile from './Tile.js';

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            board: '',
        }

        this.numbers = this.numbers.bind(this);
    }

    numbers(val) {
        this.setState(state => {
            let board = state.board;
            board = val;
            return {board};
        });
    }

    render() {
        return (
            <div>
                <p className={style.Main}>Board loaded!</p>
                <div className={style.Board}>
                    {
                        this.props.data.map((item) =>
                            <Tile value={item} action={this.numbers}/>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Board;