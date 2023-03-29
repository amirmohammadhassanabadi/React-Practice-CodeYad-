import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './hello';
import Timer from './timer';
import TimeList from './timeList';
import './style.css'
import { TestContext } from './testContext';

const App = () => {
    const [title, setTitle] = useState('Timer');
    const [timeArr, setTimeArr] = useState([])

    return (
        <TestContext.Provider value={{
            timeArr,
            setTimeArr,
            color: "#fff"
        }}>
            <div className='container'>
                <Hello title={title} />
                <Timer />
                    <TimeList/>
            </div>
        </TestContext.Provider>
    )
}
export default App