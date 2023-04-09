import React, { useState } from 'react';
import Hello from './Hello';
import Timer from './Timer';

const App = () => {
    const [title, setTitle] = useState("Hello, World")

    const titleHandler = () => {
        if (title == "React Course") {
            setTitle("Hello, World")
        } else {
            setTitle("React Course")
        }
    }

    return (
        <div className='wrapper'>
            <Hello title={title} />
            <Timer titleHandler={titleHandler} />
        </div>
    )
}

// class App extends React.Component {
//     constructor(){
//         super();
//         this.state = {
//             title: "React Course",
//         }
//     }

//     titleHandler = ()=>{
//         if(this.state.title == "React Course"){
//             this.setState({
//                 title: "Hello, World",
//             })
//         }else{
//             this.setState({
//                 title: "React Course",
//             })
//         }
//     }

//     render() {
//         return (
//             <div className='wrapper'>
//                 <Hello title={this.state.title}/>
//                 <Timer titleHandler={this.titleHandler}/>
//             </div>
//         );
//     }
// }

export default App;