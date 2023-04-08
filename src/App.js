import React from 'react';
import Hello from './Hello';
import Timer from './Timer';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            title: "React Course",
        }
    }

    titleHandler = ()=>{
        this.setState({
            title: "Hello, World"
        })
    }

    render() {
        return (
            <div className='wrapper'>
                <Hello title={this.state.title}/>
                <div className='clock'>
                    <Timer titleHandler={this.titleHandler}/>
                </div>
            </div>
        );
    }
}

export default App;