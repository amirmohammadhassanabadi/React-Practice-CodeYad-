import React from 'react';

class Timer extends React.Component{
    constructor(){
        super();
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }
    render(){
        setInterval(()=>{
            this.setState({
                time: new Date().toLocaleTimeString()
            })
        }, 1000)
        return(
            <h1>
                {this.state.time}
            </h1>
        )
    }
}

export default Timer;