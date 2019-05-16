import React from 'react';
import style from './Board.css';

import Tile from './Tile.js';

class Board extends React.Component {

    render() {
        return (
            <div>
                <p className={style.Main}>Board loaded!</p>
                <div className={style.Board}>
                    {
                        this.props.data.map((item) => <Tile value={item}/>)
                    }
                </div>
            </div>
        )
    }
}

export default Board;