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

    render() {
        return (
            <div className='wrapper'>
                <Hello title={this.state.title}/>
                <Timer/>
            </div>
        );
    }
}

export default App;