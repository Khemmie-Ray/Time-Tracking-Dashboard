import data from "../data";
import Card from "./Card";

function Dashboard() {
    return (
        <>
        {data.map((item, id) => {
            <Card 
             key={id}
             title={item.title}
             image={image[id]}
             prevTime={item.timeframes[time].previous}
             currentTime={item.timeframes[time].current}
            />
        })}
        </>
    )
}

export default Dashboard