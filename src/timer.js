import React, { Fragment, useEffect, useState } from "react"

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
            <Fragment>
                <h1>
                    Digital Clock
                </h1>
                <div className="clock-wrapper">
                    <span>{this.state.Time}</span>
                </div>
                <h2>
                    This is made by <b>React</b>
                </h2>
            </Fragment>
        )
    }
}

export default Timer