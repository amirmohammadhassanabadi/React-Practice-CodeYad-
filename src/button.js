import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

class BTN extends React.Component{
    render(){
        return(
            <button className='btn' onClick={this.props.titleHandler}>
                Change Title
            </button>
        )
    }
}

export default BTN