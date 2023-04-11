import { useContext } from "react";
import Item from "./Item";
import { TestContext } from "./TestContex";

const TimeList = () => {
    let context = useContext(TestContext)
    return (
        <div className="timelist-wrapper">
            {context.timeArr.map((c) => (
                <Item key={Math.random()}>
                    {c}
                </Item>
            ))}
        </div>
    )
}

export default TimeList;