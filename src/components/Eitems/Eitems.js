import React from "react";
import Card from "../UI/Card";
import Eitem from "./Eitem";

import "./Eitems.css";

const EItems = (props) => {
    return (
        <Card className="expenses">
            <Eitem
                title={props.items[0].title}
                price={props.items[0].price}
                date={props.items[0].dateItem}
            />
            <Eitem
                title={props.items[1].title}
                price={props.items[1].price}
                date={props.items[1].dateItem}
            />
            <Eitem
                title={props.items[2].title}
                price={props.items[2].price}
                date={props.items[2].dateItem}
            />
            <Eitem
                title={props.items[3].title}
                price={props.items[3].price}
                date={props.items[3].dateItem}
            />
        </Card>
    );
};

export default EItems;
