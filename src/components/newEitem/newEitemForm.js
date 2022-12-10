import React from "react";
import "./newEitemForm.css";

const NewEitemForm = () => {
    const cityChangeHandler = (e) => {
        console.log(e.target.value);
    };

    return (
        <form className="new-expense__controls">
            <div className="new-expense__controls">
                <label htmlFor="city">City : </label>
                <input type="text" onChange={cityChangeHandler} />
            </div>
            <div className="new-expense__controls">
                <label htmlFor="price">Price : </label>
                <input type="number" min="0.01" step="0.01" />
            </div>
            <div className="new-expense__controls">
                <label htmlFor="date">Date : </label>
                <input type="date" min="2018-01-01" max="2025-12-31" />
            </div>
            <div className="new-expense__actions">
                <button type="submit">submit</button>
            </div>
        </form>
    );
};

export default NewEitemForm;
