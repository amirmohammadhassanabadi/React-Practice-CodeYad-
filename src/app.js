import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './hello';
import Timer from './timer';
import BTN from './button';
import './style.css'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            Title: "React Course"
        }
        // this.titleHandler = this.titleHandler.bind(this);
    }

    titleHandler = ()=>{
        this.setState({
            Title: "React Session 12"
        })
    }

    // titleHandler (){
    //     this.setState({
    //         Title: "React Session 12"
    //     })
    // }

    render() {
        return (
            <div className='container'>
                <Hello Title={this.state.Title}/>
                <div className='main-border'>
                    <div className='main'>
                        <Timer/>
                    </div>
                </div>
                <BTN titleHandler = {this.titleHandler}/>
            </div>
        )
    }
}

export default App