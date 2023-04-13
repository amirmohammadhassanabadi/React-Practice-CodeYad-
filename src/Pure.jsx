import React, { Fragment, createRef, useEffect, useRef, useState } from 'react';

let counter = 0;

const Pure = () => {
    const [name, setName] = useState("");
    const myInput = useRef();
    const changeName = () => {
        setName(myInput.current.value);
    }
    useEffect(() => {
        myInput.current.focus();
    }, [])
    return (
        <Fragment>
            <h1 className='text-light my-2'>
                Guess the Word
            </h1>
            <input ref={myInput} type='text' id='input' className='form-control mt-4' />
            <div className="btn-wrapper mt-4">
                <button className='btn  me-2' onClick={() => { myInput.current.value = "" }}>Hide</button>
                <button className='btn' onClick={changeName}>Submit</button>
            </div>
            <h5 className='py-3'>{counter++}</h5>
        </Fragment>
    );
}

export default Pure;