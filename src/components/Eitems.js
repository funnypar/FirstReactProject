import "./Eitems.css";

function EItems(props) {
    const month = props.dateItem.toLocaleString("en-US", { month: "long" });
    const day = props.dateItem.toLocaleString("en-US", { day: "2-digit" });
    const year = props.dateItem.getFullYear();
    return (
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
        </div>
    );
}

export default EItems;
