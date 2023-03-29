import Item from "./item"
import './style.css'
const timeList = (props)=>{
    return(
        <div className="main-timelap">
            {props.children.map((c) =>{
                return <Item key={Math.random()}>{c}</Item>
            })}
        </div>
    )
}

export default timeList