import React, { Fragment, createRef, forwardRef, useEffect, useRef, useState } from 'react';

let counter = 0;

const Pure = (prop, ref) => {
    const [name, setName] = useState("");

    const changeName = () => {
        setName(ref.current.value);
    }

    return (
        <Fragment>
            <h1 className='text-light my-2'>
                Guess the Word
            </h1>
            <input ref={ref} type='text' id='input' className='form-control mt-4' />
            <div className="btn-wrapper mt-4">
                <button className='btn  me-2' onClick={() => { ref.current.value = "" }}>Hide</button>
                <button className='btn' onClick={changeName}>Submit</button>
            </div>
            <h5 className='py-3'>{counter++}</h5>
        </Fragment>
    );
}

export default forwardRef(Pure);