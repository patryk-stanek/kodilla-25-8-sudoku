import React from 'react';
import style from './Board.css';

import Tile from './Tile.js';

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            board: this.props.data
        }

        this.numbers = this.numbers.bind(this);
    }

    numbers(val) {
        const value = val.target.value;
        const id = val.target.id;

        //maxlength w inpucie nie działa i bez poniższych trzech linijek można wpisywać w pole więcej niż jedną cyfrę czego na obecnym etapie chciałbym uniknąć
        const max = 10;
        const maxLength = max.toString().length-1;
        const newVal = value < max ? value : parseInt(value.toString().substring(0, maxLength));
        console.log(newVal);

        this.setState(state => {
            let board = state.board;
            board[id] = newVal;
            // board[id] = value;
            return {board};
        });
    }

    render() {
        return (
            <div>
                <p className={style.Main}>Board loaded!</p>
                <div className={style.Board}>
                    {
                        this.props.data.map((item, index) =>
                            <Tile value={item} action={this.numbers} id={index}/>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Board;