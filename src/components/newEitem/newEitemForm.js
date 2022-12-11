import React, { useState } from "react";
import "./newEitemForm.css";

const NewEitemForm = () => {
    // const [enteredCity, setenteredCity] = useState("");
    // const [enteredPrice, setenteredPrice] = useState("");
    // const [enteredDate, setenteredDate] = useState("");

    const [inputUser, setInputUser] = useState({
        enteredCity: "",
        enteredPrice: "",
        enteredDate: "",
    });

    const cityChangeHandler = (e) => {
        setInputUser({
            ...inputUser,
            enteredCity: e.target.value,
        });
    };
    const priceChangeHandler = (e) => {
        setInputUser({
            ...inputUser,
            enteredPrice: e.target.value,
        });
    };
    const dateChangeHandler = (e) => {
        setInputUser({
            ...inputUser,
            enteredDate: e.target.vlaue,
        });
    };

    return (
        <form className="new-expense__controls">
            <div className="new-expense__controls">
                <label htmlFor="city">City : </label>
                <input type="text" onChange={cityChangeHandler} />
            </div>
            <div className="new-expense__controls">
                <label htmlFor="price">Price : </label>
                <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    onChange={priceChangeHandler}
                />
            </div>
            <div className="new-expense__controls">
                <label htmlFor="date">Date : </label>
                <input
                    type="date"
                    min="2018-01-01"
                    max="2025-12-31"
                    onChange={dateChangeHandler}
                />
            </div>
            <div className="new-expense__actions">
                <button type="submit">submit</button>
            </div>
        </form>
    );
};

export default NewEitemForm;
