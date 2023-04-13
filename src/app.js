import React from 'react';
import Parent from './Parent';

const App = () => {
    return (
        <div className="container">
            <div className='row d-flex justify-content-center'>
                <div className='col-md-10 col-lg-8 col-xl-6'>
                    <div className='wrapper text-center p-3 my-4'>
                        <Parent/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;