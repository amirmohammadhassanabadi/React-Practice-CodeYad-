import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const tick = ()=>{
    const elem = (
        <div>
            <h1>
                This is a Clock
            </h1>
            <h2>
                Your local time is <span>{new Date().toLocaleTimeString()}</span>
            </h2>
        </div>
    )
    ReactDOM.createRoot(document.getElementById('root')).render(elem);
}
setInterval(()=>{
    tick()
}, 1000)