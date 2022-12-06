import "./Eitems.css";

function EItems() {
    const eTime = "2022/12/06";
    const eItem = "Car Price";
    const eItemPrice = 300;

    return (
        <div className="expense-item">
            <div>{eTime}</div>
            <div className="expense-item__description">
                <h2>{eItem}</h2>
                <div className="expense-item__price">${eItemPrice}</div>
            </div>
        </div>
    );
}

export default EItems;
