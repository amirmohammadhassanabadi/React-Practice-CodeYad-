import React from 'react';
import ReactDOM from 'react-dom/client';

var interval;

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            Time: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        console.log("componentDidMount");
        interval = setInterval(() => {
            this.setState({
                Time: new Date().toLocaleTimeString()
            })
        }, 1000)
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {

    }

    render() {
        console.log("render");
        return (
            <h1>
                {this.state.Time}
            </h1>
        )
    }
}

export default Timer