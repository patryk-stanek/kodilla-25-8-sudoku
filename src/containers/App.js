import React from 'react';
import {hot} from 'react-hot-loader';

import style from './App.css';

class App extends React.Component {
    
    render() {
        return (
            <div className={style.Main}>
                <h1>Hello world!</h1>
            </div>
        )
    }
}

export default hot(module)(App);