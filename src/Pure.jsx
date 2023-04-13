import React, { Fragment } from 'react';

class Pure extends React.PureComponent {
    render() {
        return (
            <Fragment>
                <h1 className='text-light my-2'>
                    Guess the Word
                </h1>
                <input type='text' id='input' className='form-control mt-4' />
                <div className="btn-wrapper mt-4">
                    <button className='btn  me-2'>Hide</button>
                    <button className='btn'>Submit</button>
                </div>
            </Fragment>
        );
    }
}

export default Pure;