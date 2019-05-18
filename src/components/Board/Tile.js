import React from 'react';
import style from './Board.css';

class Tile extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        console.log(this.state.value + ' ' + event.target.value);
        let num = event.target.value;
        this.setState({value: num});
    }

    render() {
        let num = this.props.value;
        return (
            <div>
                <input
                    type='number'
                    min='1'
                    max='9'
                    value={num === '.' ? '' : num}
                    onChange={this.props.action}
                    className={num === '.' ? style.Enabled : style.Disabled}
                />
            </div>
        )
    }
}

export default Tile;