import React from 'react';
import ReactDOM from 'react-dom/client';

var interval;

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            Time: 100
        }
    }

    componentDidMount() {
        interval = setInterval(() => {
            this.setState({
                Time: this.state.Time - 1
            })
        }, 1000)
    }

    componentDidUpdate() {
        if(this.state.Time == 0){
            clearInterval(interval);
        }
    }


    render() {
        return (
            <h1>
                {this.state.Time}
            </h1>
        )
    }
}

export default Timer