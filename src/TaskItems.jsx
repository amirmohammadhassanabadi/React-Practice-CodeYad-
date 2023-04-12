import { useContext } from "react";
import { TaskContext } from "./TaskContext";

const TaskItems = () => {
    let { taskItem, setTaskItem } = useContext(TaskContext);
    if (taskItem.length > 0) {
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
                                    e.isDone ? <i className='fa fa-times text-warning shadow_warning'></i> : <i className='fa fa-check text-info shadow_info'></i>
                                }
                                <i className='fa fa-trash text-danger'></i>
                            </span>
                        </li>
                    ))
                }
            </ul>
        )
    }else{
        return(
            <div className="w-100 py-2 bg-dark border border-danger rounded">
                <h3 className="text-danger">
                    0 Tasks to do
                </h3>
            </div>
        )
    }
}

export default TaskItems;