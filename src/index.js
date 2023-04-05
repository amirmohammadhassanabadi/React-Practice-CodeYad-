import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const Tick = () => {
    const element = <div>
        <h1>
            Hello, World
        </h1>
        <span>
            Your local time is <b>{new Date().toLocaleTimeString()}</b>
        </span>
    </div>
    root.render(element);
}

setInterval(()=>{
    Tick()
}, 1000)
// ===================================================