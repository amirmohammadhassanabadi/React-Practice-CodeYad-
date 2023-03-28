import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './hello';
import Timer from './timer';
import './style.css'

class App extends React.Component {
    render() {
        return (
            <div className='container'>
                <Hello />
                <div className='main-border'>
                    <div className='main'>
                        <Timer />
                    </div>
                </div>
            </div>
        )
    }
}

export default App