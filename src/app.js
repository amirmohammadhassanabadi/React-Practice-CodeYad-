import React from 'react';
import ReactDOM from 'react-dom/client';
import Timer from './timer';
import './style.css'

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <Timer/>
            </div>
        )
    }
}

export default App