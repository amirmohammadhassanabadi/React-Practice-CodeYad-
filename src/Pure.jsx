import React, { Fragment } from 'react';

class Pure extends React.PureComponent {
    constructor(){
        super();
        this.state = {
            name: ""
        }
        this.counter = 0;
    }

    changeName = ()=>{
        this.setState({
            name: document.getElementById('input').value
        })
    }

    render() {
        return (
            <Fragment>
                <h1 className='text-light my-2'>
                    Guess the Word
                </h1>
                <input type='text' id='input' className='form-control mt-4' />
                <div className="btn-wrapper mt-4">
                    <button className='btn  me-2' onClick={()=>{document.getElementById('input').value = ""}}>Hide</button>
                    <button className='btn' onClick={this.changeName}>Submit</button>
                </div>
                <h5 className='py-3'>{this.counter++}</h5>
            </Fragment>
        );
    }
}

export default Pure;