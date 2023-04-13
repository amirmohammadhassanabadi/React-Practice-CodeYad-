import React, { Fragment, createRef } from 'react';

class Pure extends React.PureComponent {
    constructor(){
        super();
        this.state = {
            name: ""
        }
        this.counter = 0;
        this.myInput = createRef()
    }

    changeName = ()=>{
        this.setState({
            name: this.myInput.current.value
        })
    }

    componentDidMount(){
        this.myInput.current.focus()
    }

    render() {
        // console.log(this.myInput);
        return (
            <Fragment>
                <h1 className='text-light my-2'>
                    Guess the Word
                </h1>
                <input ref={this.myInput} type='text' id='input' className='form-control mt-4' />
                <div className="btn-wrapper mt-4">
                    <button className='btn  me-2' onClick={()=>{this.myInput.current.value = ""}}>Hide</button>
                    <button className='btn' onClick={this.changeName}>Submit</button>
                </div>
                <h5 className='py-3'>{this.counter++}</h5>
            </Fragment>
        );
    }
}

export default Pure;