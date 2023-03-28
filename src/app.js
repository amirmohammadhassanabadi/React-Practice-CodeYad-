import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './hello';
import Timer from './timer';
import './style.css'

// class App extends React.Component {
//     render() {
//         return (
//             <div className='container'>
//                 <Hello/>
//                 <Timer/>
//             </div>
//         )
//     }
// }


const App = () => {
    const [title, setTitle] = useState('Timer');

    const titleHandler = () => {
        setTitle("React Course");
    }

    return (
        <div className='container'>
            <Hello title={title}/>
            <Timer titleHandler={titleHandler}/>
        </div>
    )
}
export default App