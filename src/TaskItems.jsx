const TaskItems = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item w-100 d-flex justify-content-between p-3 bg-dark">
                <span className='text-light'>
                    First Job
                </span>
                <span className='icon-wrapper d-flex justify-content-between'>
                    <i className='fa fa-check text-success'></i>
                    <i className='fa fa-times text-warning'></i>
                    <i className='fa fa-trash text-danger'></i>
                </span>
            </li>
            <li className="list-group-item w-100 d-flex justify-content-between p-3 bg-secondary">
                <span className='text-light'>
                    Second Job
                </span>
                <span className='icon-wrapper d-flex justify-content-between'>
                    <i className='fa fa-check text-success'></i>
                    <i className='fa fa-times text-warning'></i>
                    <i className='fa fa-trash text-danger'></i>
                </span>
            </li>
        </ul>
    )
}

export default TaskItems;