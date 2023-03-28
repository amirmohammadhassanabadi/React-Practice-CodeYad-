import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'

var interval;

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            Num: 100
        }
    }

    startBTN = () => {
        interval = setInterval(() => {
            this.setState({
                Num: this.state.Num - 1
            })
        }, 1000)
    }

    stopBTN = ()=>{
        clearInterval(interval);
    }

    resetBTN = ()=>{
        this.setState({
            Num: 100
        })
    }

    componentDidMount() {
        this.startBTN()
    }

    componentDidUpdate() {
        if (this.state.Num == 0) {
            this.stopBTN();
        }
    }

    render() {
        return (
            <>
                <div className='main-border'>
                    <div className='main'>
                        <h1 id='show'>
                            {this.state.Num}
                        </h1>
                    </div>
                </div>
                <div className='btn-holder'>
                    <button className='start' onClick={this.startBTN}>Start</button>
                    <button className='stop' onClick={this.stopBTN}>Stop</button>
                    <button className='reset' onClick={this.resetBTN}>Reset</button>
                </div>
            </>
        )
    }
}

export default Timer