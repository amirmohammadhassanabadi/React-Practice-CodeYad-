import { Fragment } from "react";

const TopForm = ()=>{
    return (
        <Fragment>
            <h2 className="text-center text-primary text_shdow my-3">WellCome to the React</h2>
            <form className="my-4">
                <div className="form-group d-flex">
                    <input type="text" className="form-control" />
                    <button type="submit" className="btn btn-primary ms-2">Submit</button>
                </div>
            </form>
        </Fragment>
    )
}
export default TopForm;