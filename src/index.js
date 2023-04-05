import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

class Hello extends React.Component {
    render() {
        return (
            <h1>
                Hello, World
            </h1>
        )
    }
}

class Time extends React.Component {
    constructor() {
        super();
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }
    render() {
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            })
        }, 1000)
        return (
            <h1>
                {this.state.time}
            </h1>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div className='wrapper'>
                <Hello />
                <div className='clock'>
                    <Time />
                </div>
            </div>
        )
    }
}

root.render(<App />);
// ===================================================