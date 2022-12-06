import EItems from "./components/Eitems";

import "./App.css";

function App() {
    let expenseItems = [
        { id: "e1", title: "New york", price: "200", dateItem: "2022/11/06" },
        { id: "e2", title: "Paris", price: "400", dateItem: "2022/10/06" },
        { id: "e3", title: "Rom", price: "100", dateItem: "2022/09/06" },
        { id: "e4", title: "Tehran", price: "50", dateItem: "2022/08/06" },
    ];

    return (
        <div>
            <EItems
                title={expenseItems[0].title}
                price={expenseItems[0].price}
                dateItem={expenseItems[0].dateItem}
            ></EItems>
            <EItems
                title={expenseItems[1].title}
                price={expenseItems[1].price}
                dateItem={expenseItems[1].dateItem}
            ></EItems>
            <EItems
                title={expenseItems[2].title}
                price={expenseItems[2].price}
                dateItem={expenseItems[2].dateItem}
            ></EItems>
            <EItems
                title={expenseItems[3].title}
                price={expenseItems[3].price}
                dateItem={expenseItems[3].dateItem}
            ></EItems>
        </div>
    );
}

export default App;
