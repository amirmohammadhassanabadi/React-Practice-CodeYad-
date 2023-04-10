import { useContext } from "react"
import { TestContext } from "./TestContex"

const Item = (prop)=>{
    let context = useContext(TestContext)
    return (
        <div style={{color: context}}>
            {prop.children}
        </div>
    )
}

export default Item