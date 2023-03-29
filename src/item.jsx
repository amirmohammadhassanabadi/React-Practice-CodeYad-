import { useContext } from "react"
import { TestContext } from "./testContext"

const Item = (props)=>{
    const context = useContext(TestContext)
    return(
        <div style={{color: context.color}}>
            {props.children}
        </div>
    )
}
export default Item