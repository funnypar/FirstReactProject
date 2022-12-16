import React, { useState } from "react";

import EItems from "./components/Eitems/Eitems";
import NewEitem from "./components/newEitem/newEitem";

import "./App.css";

let DUMMY_EXPENSEITEMS = [
    {
        id: "e1",
        title: "New york",
        price: "200",
        dateItem: new Date(2022, 11, 6),
    },
    {
        id: "e2",
        title: "Paris",
        price: "400",
        dateItem: new Date(2022, 10, 12),
    },
    {
        id: "e3",
        title: "Rom",
        price: "100",
        dateItem: new Date(2022, 9, 26),
    },
    {
        id: "e4",
        title: "Tehran",
        price: "50",
        dateItem: new Date(2022, 8, 16),
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSEITEMS);

    const addEitemHandler = (newEitemData) => {
        setExpenses((addExpenses) => {
            return [newEitemData, ...addExpenses];
        });
    };

    return (
        <div className="App-header">
            <NewEitem onAddEitem={addEitemHandler} />
            <EItems items={expenses} />
        </div>
    );
};

export default App;
