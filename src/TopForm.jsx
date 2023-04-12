import { Fragment, useContext, useState } from "react";
import { TaskContext } from "./TaskContext";

const TopForm = () => {
    const [task, setTask] = useState("")
    const { taskItem, setTaskItem } = useContext(TaskContext)

    const inputTaskHandler = (e) => {
        setTask(e.target.value);
    }

    const saveTask = (e) => {
        e.preventDefault();
        setTaskItem([...taskItem, {
            id: taskItem.length + 1,
            title: task,
            isDone: false
        }])
        e.target.parentElement.children[0].value = "";
        setTask("");
    }

    return (
        <Fragment>
            <h1 className='text-info my-2 text_shadow'>
                Wellcome to React
            </h1>
            <form className='my-4'>
                <div className='d-flex form-group'>
                    <input type='text' className='form-control me-1 input' onChange={inputTaskHandler} />
                    <input type='submit' className='btn btn-info' onClick={saveTask} />
                </div>
            </form>
        </Fragment>
    )
}

export default TopForm;