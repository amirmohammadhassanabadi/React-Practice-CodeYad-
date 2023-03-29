import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './hello';
import Timer from './timer';
import TimeList from './timelist';
import './style.css'

const App = () => {
    const [title, setTitle] = useState('Timer');
    const [isBgLight, setBgLight] = useState(false);
    const [timeArr, setTimeArr] = useState([])

    const bgHandler = () => {
        setBgLight(!isBgLight);
    }

    return (
        <div className='container' style={{ background: isBgLight ? "#fff" : "#000" }}>
            <Hello title={title} />
            <Timer
                timeArr={timeArr}
                setTimeArr={setTimeArr}
                isBgLight={isBgLight}
                bgHandler={bgHandler} />
        </div>
    )
}
export default App