import React, { Fragment } from 'react';

let interval;

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            sec: 0,
            min: 0,
            hr: 0,
            isStart: false
        }
    }

    startWatch = () => {
        if (this.state.isStart === false) {
            interval = setInterval(() => {
                this.setState({
                    sec: this.state.sec + 1,
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

    resetWatch = () => {
        this.stopWatch();
        this.setState({
            sec: 0,
            min: 0,
            hr: 0
        })
    }

    componentDidUpdate() {
        if (this.state.sec === 60) {
            this.setState({
                sec: 0,
                min: this.state.min + 1
            })
        } else if (this.state.min === 60) {
            this.setState({
                min: 0,
                hr: this.state.hr + 1
            })
        }
    }

    render() {
        return (
            <Fragment>
                <div className='clock' onClick={this.props.timeListHandler}>
                    <h1>
                        {`${this.state.hr > 9 ? this.state.hr : "0" + this.state.hr} : ${this.state.min > 9 ? this.state.min : "0" + this.state.min} : ${this.state.sec > 9 ? this.state.sec : "0" + this.state.sec}`}
                    </h1>
                </div>
                <div>
                    <button onClick={this.startWatch}>
                        Start
                    </button>
                    <button onClick={this.stopWatch}>
                        Stop
                    </button>
                    <button onClick={this.resetWatch}>
                        Reset
                    </button>
                    <button onClick={this.props.themeHandler} style={{
                        backgroundColor: this.props.isLight ? "#354047" : "whitesmoke" ,
                        color: this.props.isLight ? "whitesmoke" : "#000"
                    }}>
                        {this.props.isLight ? "Dark Mode" : "Light Mode"}
                    </button>
                    <br />
                </div>
            </Fragment>
        )
    }
}

export default Timer;