import { Fragment } from "react";

const TopForm = () => {
    return (
        <Fragment>
            <h1 className='text-info my-2 text_shadow'>
                Wellcome to React
            </h1>
            <form action='#' className='my-4'>
                <div className='d-flex form-group'>
                    <input type='text' className='form-control me-1'></input>
                    <input type='submit' className='btn btn-info'></input>
                </div>
            </form>
        </Fragment>
    )
}

export default TopForm;