import React from 'react';

let interval;

class Timer extends React.Component{
    constructor(){
        super();
        this.state = {
            time: new Date().toLocaleTimeString()
        }
    }

    componentDidMount(){
        interval = setInterval(()=>{
            this.setState({
                time: new Date().toLocaleTimeString()
            })
        }, 1000)
    }

    componentDidUpdate(){
        if(this.state.time == "2:58:10 AM"){
            clearInterval(interval)
        }
    }

    render(){
        return(
            <h1>
                {this.state.time}
            </h1>
        )
    }
}

export default Timer;