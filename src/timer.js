import React from 'react';
import ReactDOM from 'react-dom/client';
import { TestContext } from './testContext';
import TimeList from './timelist';

var interval;

class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            sec: 0,
            min: 0,
            hr: 0,
            isStarted: false
        }
    }

    static contextType = TestContext;

    startBTN = ()=>{
        if(this.state.isStarted === false){
            interval = setInterval(()=>{
                this.setState({
                    sec: this.state.sec + 1
                })
            }, 1000)
            this.setState({
                isStarted: true
            })
        }
    }

    stopBTN = ()=>{
        clearInterval(interval)
        this.setState({
            isStarted: false
        })
    }

    resetBTN = ()=>{
        this.stopBTN()
        this.setState({
            sec: 0,
            min: 0,
            hr: 0 
        })
    }

    componentDidUpdate() {
        if (this.state.sec == 60) {
            this.setState({
                sec: 0,
                min: this.state.min + 1,
            })
        }
        if(this.state.min == 60){
            if (this.state.sec == 60) {
                this.setState({
                    sec: 0,
                    min: this.state.min + 1,
                })
            }
        }
    }

    saveTimeHandler = ()=>{
        let h = this.state.hr;
        let m = this.state.min;
        let s = this.state.sec;
        let newTime = `${`${h > 9 ? h: "0" + h} : ${m > 9 ? m: "0" + m} : ${s > 9 ? s: "0" + s}`}`
        this.context.setTimeArr([...this.context.timeArr, newTime]);
    }

    render() {
        let h = this.state.hr;
        let m = this.state.min;
        let s = this.state.sec;
        return (
            <>
            <div className='main-border' onClick={this.saveTimeHandler}>
                <div className='main'>
                    <h1 style={{color: this.context.color}}>
                        <span>{`${h > 9 ? h: "0" + h}`}</span>
                        <span>{`${m > 9 ? m: "0" + m}`}</span>
                        <span>{`${s > 9 ? s: "0" + s}`}</span>
                    </h1>
                </div>
            </div>
            <div className='btn-wrapper'>
                <button className='start' onClick={this.startBTN}>Start</button>
                <button className='stop' onClick={this.stopBTN}>Stop</button>
                <button className='reset' onClick={this.resetBTN}>Reset</button>
                <button className='change' onClick={this.props.bgHandler} style={{
                    background: this.props.isBgLight ? "#000" : this.context.color,
                    color: this.props.isBgLight ? "#fff" : "#000"
                }}>
                    {this.props.isBgLight ? "Dark" : "Light"}
                    </button>
            </div>
            <TimeList>
                {this.context.timeArr}
            </TimeList>
            </>
        )
    }
}

export default Timer