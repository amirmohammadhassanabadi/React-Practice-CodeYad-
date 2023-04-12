import { useContext } from "react";
import { TaskContext } from "./TaskContext";

const TaskItems = () => {
    let { taskItem, setTaskItem } = useContext(TaskContext);
    return (
        <ul className="list-group">
            {
                taskItem.map(e => (
                    <li className={`list-group-item w-100 d-flex justify-content-between p-3 ${e.isDone ? "bg-success" : "bg-dark"}`}>
                        <span className='text-light'>
                            {e.title}
                        </span>
                        <span className='icon-wrapper d-flex justify-content-between'>
                            {
                                e.isDone ? <i className='fa fa-times text-warning'></i> : <i className='fa fa-check text-info'></i> 
                            }
                            <i className='fa fa-trash text-danger'></i>
                        </span>
                    </li>
                ))
            }
        </ul>
    )
}

export default TaskItems;