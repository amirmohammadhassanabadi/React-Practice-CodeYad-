import { useContext } from "react"
import { TestContext } from "./TestContex"

const Item = (prop)=>{
    let context = useContext(TestContext);

    const deleteItemHandler = (e)=>{
        context.setTimeArr(context.timeArr.filter((c)=>(c != e.target.innerHTML)))
    }

    return (
        <div style={{color: context}} onClick={deleteItemHandler}>
            {prop.children}
        </div>
    )
}

export default Item