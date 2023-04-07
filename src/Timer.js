import React from 'react';

let interval;

class Timer extends React.Component{
    constructor(){
        super();
        this.state = {
            time: 10
        }
    }

    componentDidMount(){
        interval = setInterval(()=>{
            this.setState({
                    time: this.state.time - 1
            })
        }, 1000)
    }

    componentDidUpdate(){
        if(this.state.time == 0){
            clearInterval(interval);
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