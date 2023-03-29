import { useContext } from "react"
import Item from "./item"
import './style.css'
import { TestContext } from "./testContext"
const TimeList = ()=>{
    const context = useContext(TestContext)
    return(
        <div className="main-timelap">
            {context.timeArr.map((c) =>{
                return <Item key={Math.random()}>{c}</Item>
            })}
        </div>
    )
}

export default TimeList