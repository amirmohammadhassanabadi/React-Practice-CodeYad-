import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
class Hello extends React.Component {
    render() {
        return (
            <h1>
                This is a Clock
            </h1>
        )
    }
}

class Timer extends React.Component {
    render() {
        return (
            <h2>
                Your local time is <span>{new Date().toLocaleTimeString()}</span>
            </h2>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Hello/>
                <Timer />
            </div>
        )
    }
}

// ---------------------------------------
// {let elem1 = new App()}
// elem1.render() == <App/>
// ---------------------------------------

const tick = () => {
    root.render(<App />)
}

setInterval(() => {
    tick()
}, 1000)
// ===================================================