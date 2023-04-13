import React, { Fragment, createRef } from 'react';
import Pure from './Pure';

class Parent extends React.Component {
    constructor() {
        super();
        this.myInput= createRef()
    }

    componentDidMount(){
        this.myInput.current.focus()
        console.log(this.myInput);
    }

    render() {
        return (
            <Fragment>
                <div>
                    <Pure ref={this.myInput} />
                </div>
                <button className='btn btn-light' onClick={this.changeComponent}>Test</button>
            </Fragment>
        )
    }
}

export default Parent;