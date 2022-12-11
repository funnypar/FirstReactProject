import React, { useState } from "react";
import "./newEitemForm.css";

const NewEitemForm = () => {
    const [enteredCity, setenteredCity] = useState("");
    const [enteredPrice, setenteredPrice] = useState("");
    const [enteredDate, setenteredDate] = useState("");

    const cityChangeHandler = (e) => {
        setenteredCity(e.target.value);
    };
    const priceChangeHandler = (e) => {
        setenteredPrice(e.target.value);
    };
    const dateChangeHandler = (e) => {
        setenteredDate(e.target.value);
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        const userInputs = {
            city: enteredCity,
            price: enteredPrice,
            date: new Date(enteredDate),
        };
        console.log(userInputs);
    };

    return (
        <form className="new-expense__controls" onSubmit={formSubmitHandler}>
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
