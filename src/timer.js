import React from 'react';
import ReactDOM from 'react-dom/client';

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            Time: new Date().toLocaleTimeString()
        }
    }
    render() {
        setInterval(() => {
            this.setState({
                Time: new Date().toLocaleTimeString()
            })
        }, 1000)
        return (
            <h1>
                {this.state.Time}
            </h1>
        )
    }
}

export default Timer