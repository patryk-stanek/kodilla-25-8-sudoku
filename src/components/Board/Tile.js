import React from 'react';
import style from './Board.css';

class Tile extends React.Component {
    render() {
        const num = this.props.value;
        return (
          <div>
            <input
                type='number'
                min='1'
                max='9'
                id={this.props.id}
                value={num === '.' ? '' : num}
                onChange={this.props.action}
                className={num === '.' ? style.Enabled : style.Disabled}
            />
          </div>
        )
    }
}

export default Tile;
