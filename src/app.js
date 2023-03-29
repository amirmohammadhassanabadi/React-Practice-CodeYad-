import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './hello';
import Timer from './timer';
import './style.css'
import { TestContext } from './testContext';

const App = () => {
    const [title, setTitle] = useState('Timer');
    const [isBgLight, setBgLight] = useState(false);
    const [timeArr, setTimeArr] = useState([])

    const bgHandler = () => {
        setBgLight(!isBgLight);
    }

    return (
        <TestContext.Provider value={{
            timeArr: timeArr,
            setTimeArr: setTimeArr,
            color: "#fff"
        }}>
            <div className='container' style={{ background: isBgLight ? "#fff" : "#000" }}>
                <Hello title={title} />
                <Timer
                    isBgLight={isBgLight}
                    bgHandler={bgHandler} />
            </div>
        </TestContext.Provider>
    )
}
export default App