import React from 'react';
import ReactDOM from 'react-dom/client';
import TaskItem from './TaskItem';
import TopForm from './TopForm';


const App = () => {
    return (
        <div className='container  w-100 h-100 p-1 d-flex justify-content-center align-items-center'>
            <div className='w-100 row justify-content-center align-items-start'>
                <div className="col-12 col-md-8 col-lg-6 bg-dark shadow rounded-3 p-3 h_fit">
                    <TopForm/>
                    <TaskItem/>
                </div>
            </div>
        </div>


    )
}
export default App