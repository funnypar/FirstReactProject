import EitemsDate from "./EitemsDate";
import "./Eitems.css";

function EItems(props) {
    return (
        <div className="expense-item">
            <EitemsDate dateItem={props.dateItem} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
        </div>
    );
}

export default EItems;
