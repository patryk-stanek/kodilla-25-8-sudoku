import React from 'react';

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        let num = this.props.value;
        if (num == '.') {
            num = '0';
        }
        this.setState({value: num});
    }

    handleChange(event) {
        console.log(this.state.value + ' ' + event.target.value);
        let num = event.target.value;
        this.setState({value: num});
    }

    render() {
        return (
            <div>
                <input
                    type='number'
                    min='0'
                    max='9'
                    value={this.state.value}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default Tile;