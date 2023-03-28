import React from 'react';
import ReactDOM from 'react-dom/client';

var interval;
let userNum;
do {
    userNum = Number(prompt("Please enter a Natural(positive integers) number"));
} while (isNaN(userNum) == true && Number(userNum) <= 0);

class Timer extends React.Component {
    constructor(){
        super();
        this.state = {
            Num: userNum
        }
    }

    componentDidMount(){
        interval = setInterval(()=>{
            userNum--;
            this.setState({
                Num: userNum
            })
        }, 1000)
    }

    componentDidUpdate(){
        if(userNum == 0){
            clearInterval(interval)
        }
    }
    
    render() {
        return (
            <h1 id='show'>
                {this.state.Num}
            </h1>
        )
    }
}

export default Timer