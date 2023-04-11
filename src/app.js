import React from 'react';

const App = () => {
    return (
        <div className="container">
            <div className='row d-flex justify-content-center'>
                <div className='col-md-10 col-lg-8 col-xl-6'>
                    <div className='wrapper text-center p-3 my-4'>
                        <h1 className='text-info my-2'>
                            Wellcome to React 
                        </h1>
                        <form action='#' className='d-flex my-4'>
                            <input type='text' className='form-control me-1'></input>
                            <input type='submit' className='btn btn-info'></input>
                        </form>
                        <div className='w-100 p-3 bg-dark d-flex justify-content-between mb-1'>
                            <span className='text-light'>
                                First Job
                            </span>
                            <div className='icon-wrapper d-flex justify-content-between'>
                            <i className='fa fa-check text-success'></i>
                            <i className='fa fa-times text-info'></i>
                            <i className='fa fa-trash text-danger'></i>
                            </div>
                        </div>
                        <div className='w-100 p-3 bg-dark d-flex justify-content-between mb-1'>
                            <span className='text-light'>
                                Second Job
                            </span>
                            <div className='icon-wrapper d-flex justify-content-between'>
                            <i className='fa fa-check text-success'></i>
                            <i className='fa fa-times text-info'></i>
                            <i className='fa fa-trash text-danger'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;