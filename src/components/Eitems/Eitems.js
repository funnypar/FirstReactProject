import Card from "../UI/Card";
import EitemsDate from "./EitemsDate";
import "./Eitems.css";

const EItems = (props) => {
    const hiHandler = () => console.log("hi there !!!");

    return (
        <Card className="expense-item">
            <EitemsDate dateItem={props.dateItem} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.price}</div>
                <button onClick={hiHandler}>click here!</button>
            </div>
        </Card>
    );
};

export default EItems;
