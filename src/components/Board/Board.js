import React from 'react';
import style from './Board.css';
import Tile from './Tile.js';

class Board extends React.Component {
  numbers (val) {
    const tileValue = val.target.value;
    const tileID = val.target.id;
    const max = 9;
    const maxLength = 1;
    const newVal = tileValue <= max ? tileValue : parseInt(tileValue.toString().substring(0, maxLength));

    this.props.onBoardUpdate(tileID, newVal);
  }

  render() {
    let items = [];

    if (this.props.data) {
      items = this.props.data.map((item, index) =>
        <Tile value={item} action={this.numbers.bind(this)} id={index} key={index}/>
      );
    }

    return (
      <>
        <div className={style.Board}>
          {items}
        </div>
      </>
    )
  }
}

export default Board;
