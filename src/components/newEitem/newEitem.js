import React from "react";
import NewEitemForm from "./newEitemForm";
import "./newEitem.css";

const NewEitem = (props) => {
    const SaveExpenseDataHandler = (expenseData) => {
        const expenseDatas = {
            ...expenseData,
            id: Math.random().toString(),
        };
        props.onAddEitem(expenseDatas);
    };

    return (
        <div className="new-expense">
            <NewEitemForm onSaveExpenseData={SaveExpenseDataHandler} />
        </div>
    );
};

export default NewEitem;
