import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Hello, World
                </h1>
                <span>
                    Your local time is <b>{new Date().toLocaleTimeString()}</b>
                </span>
            </div>
        )
    }
}

let element = new App()

const Tick = () => {
    root.render(element.render());
}

setInterval(() => {
    Tick()
}, 1000)
// ===================================================