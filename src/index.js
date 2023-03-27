import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
class Hello extends React.Component {
    render() {
        return (
            <h1 className='title'>
                Digital Clock
            </h1>
        )
    }
}

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            Time: new Date().toLocaleTimeString()
        }
    }
    render() {
        setInterval(() => {
            this.setState({
                Time: new Date().toLocaleTimeString()
            })
        }, 1000)
        return (
            <h1>
                {this.state.Time}
            </h1>
        )
    }
}

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

root.render(<App />)
// ===================================================