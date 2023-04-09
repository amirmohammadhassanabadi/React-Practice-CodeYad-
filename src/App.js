import React, { useEffect, useState } from 'react';
import Hello from './Hello';
import Timer from './Timer';

const App = () => {
    const [title, setTitle] = useState("Hello, World");
    const [isLight, setLight] = useState(false);

    const titleHandler = () => {
        if (title == "React Course") {
            setTitle("Hello, World")
        } else {
            setTitle("React Course")
        }
    }

    useEffect(()=>{
        console.log("useEffect");
    }, [isLight])

    const themeHandler = ()=>{
        setLight(!isLight);
    }

    return (
        <div className='wrapper' style={{
            backgroundColor: isLight ? "#c5c5c5": "#3f474b" 
        }}>
            <Hello title={title} />
            <Timer titleHandler={titleHandler} themeHandler={themeHandler} isLight={isLight}/>
        </div>
    )
}

export default App;