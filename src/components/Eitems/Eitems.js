import React from "react";
import Card from "../UI/Card";
import Eitem from "./Eitem";

import "./Eitems.css";

const EItems = (props) => {
    return (
        <Card className="expenses">
            {props.items.map((item) => {
                return (
                    <Eitem
                        key={item.id}
                        title={item.title}
                        price={item.price}
                        date={item.dateItem}
                    />
                );
            })}
        </Card>
    );
};

export default EItems;
