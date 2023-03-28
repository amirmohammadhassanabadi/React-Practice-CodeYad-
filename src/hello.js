import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'

class Hello extends React.Component {
    render() {
        return (
            <h1 className='title'>
                {this.props.Title}
            </h1>
        )
    }
}

export default Hello