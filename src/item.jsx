import { useContext } from "react"
import { TestContext } from "./testContext"

const Item = (props)=>{
    const context = useContext(TestContext);

    const deleteHandler = (e)=>{
        context.setTimeArr(context.timeArr.filter(t => t != e.target.innerHTML))
    }
    return(
        <div style={{color: context.color}} onClick={deleteHandler}>
            {props.children}
        </div>
    )
}
export default Item