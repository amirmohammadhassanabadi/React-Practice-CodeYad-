import React, { Fragment } from 'react';

let interval;

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            time: 100,
            isStart: false
        }
    }

    componentDidMount() {
        interval = setInterval(() => {
            this.setState({
                time: this.state.time - 1,
                isStart: true
            })
        }, 1000)
    }

    startWatch = () => {
        if (this.state.isStart === false) {
            interval = setInterval(() => {
                this.setState({
                    time: this.state.time - 1,
                    isStart: true
                })
            }, 1000)
        }
    }

    stopWatch = () => {
        if (this.state.isStart === true) {
            clearInterval(interval);
            this.setState({
                isStart: false
            })
        }
    }

    componentDidUpdate() {
        if (this.state.isStart == 0) {
            clearInterval(interval);
        }
    }

    render() {
        return (
            <Fragment>
                <div className='clock'>
                    <h1>
                        {this.state.time}
                    </h1>
                </div>
                <div>
                    <button onClick={this.startWatch}>
                        Start
                    </button>
                    <button onClick={this.stopWatch}>
                        Stop
                    </button>
                </div>
            </Fragment>
        )
    }
}

export default Timer;