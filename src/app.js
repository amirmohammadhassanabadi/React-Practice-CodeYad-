import React, { useEffect, useState } from 'react';
import Hello from './Hello';
import Timer from './Timer';
import TimeList from './TimeList';
import { TestContext } from './TestContex';

const App = () => {
    const [title, setTitle] = useState("Hello, World");
    const [isLight, setLight] = useState(false);
    const [timeArr, setTimeArr] = useState([]);

    const timeListHandler = () => {
        setTimeArr([... timeArr, document.querySelector(".clock").children[0].innerHTML])
    }

    const titleHandler = () => {
        if (title == "React Course") {
            setTitle("Hello, World")
        } else {
            setTitle("React Course")
        }
    }

    const themeHandler = () => {
        setLight(!isLight);
    }

    return (
        <TestContext.Provider value={{
            timeArr ,
             setTimeArr
        }
        }>
        <div className='wrapper' style={{
            backgroundColor: isLight ? "#c5c5c5" : "#3f474b"
        }}>
            <Hello title={title} />
            <Timer
                titleHandler={titleHandler}
                themeHandler={themeHandler}
                isLight={isLight}
                timeListHandler={timeListHandler}
                />
            <TimeList>
                {timeArr}
            </TimeList>
        </div>
        </TestContext.Provider>
    )
}

export default App;