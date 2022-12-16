import React from "react";
import Card from "../UI/Card";
import EitemsDate from "./EitemsDate";

import "./Eitem.css";

const Eitem = (props) => {
    return (
        <Card className="expense-item">
            <EitemsDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
        </Card>
    );
};

export default Eitem;
