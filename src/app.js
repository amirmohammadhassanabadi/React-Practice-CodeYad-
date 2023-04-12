import React, { useState } from 'react';
import TopForm from './TopForm';
import TaskItems from './TaskItems';
import { TaskContext } from './TaskContext';

const App = () => {
    const [taskItem, setTaskItem] = useState([
        {
            id: 1,
            title: "First Job",
            isDone: false
        },
        {
            id: 2,
            title: "Second Job",
            isDone: true
        },
        {
            id: 3,
            title: "Third Job",
            isDone: false
        }
    ])
    return (
        <div className="container">
            <div className='row d-flex justify-content-center'>
                <div className='col-md-10 col-lg-8 col-xl-6'>
                    <div className='wrapper text-center p-3 my-4'>
                        <TaskContext.Provider value={{
                            taskItem, 
                            setTaskItem
                        }}>
                            <TopForm />
                            <TaskItems />
                        </TaskContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;