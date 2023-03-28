import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './hello';
import Timer from './timer';
import BTN from './button';
import './style.css'

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <Hello/>
                <Timer/>
            </div>
        )
    }
}

export default App