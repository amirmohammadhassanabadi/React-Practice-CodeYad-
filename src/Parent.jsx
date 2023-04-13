import React, { Fragment, createRef } from 'react';
import Pure from './Pure';

class Parent extends React.Component {
    constructor() {
        super();
        this.componentRef = createRef()
    }

    changeComponent = ()=>{
        this.componentRef.current.changeName();
    }

    render() {
        return (
            <Fragment>
                <div>
                    <Pure ref={this.componentRef} />
                </div>
                <button className='btn btn-light' onClick={this.changeComponent}>Test</button>
            </Fragment>
        )
    }
}

export default Parent;