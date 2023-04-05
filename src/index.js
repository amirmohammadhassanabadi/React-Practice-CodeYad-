import React from 'react';
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
    render() {
        return (
            <span>
                Your local time is <b>{new Date().toLocaleTimeString()}</b>
            </span>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Hello/>
                <Time/>
            </div>
        )
    }
}

let element = new App()

const Tick = () => {
    root.render(<App/>);
}

setInterval(() => {
    Tick()
}, 1000)
// ===================================================