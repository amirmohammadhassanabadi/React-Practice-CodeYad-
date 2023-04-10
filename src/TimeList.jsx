import Item from "./Item";

const TimeList = (prop) => {
    return (
        <div className="timelist-wrapper">
            {prop.children.map((c) => (
                <Item key={Math.random()}>
                    {c}
                </Item>
            ))}
        </div>
    )
}

export default TimeList;