import EItems from "./components/Eitems/Eitems";
import Card from "./components/UI/Card";

import "./App.css";

const App = () => {
    let expenseItems = [
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

    return (
        <div className="App-header">
            <Card className="App-wrapper">
                <EItems
                    title={expenseItems[0].title}
                    price={expenseItems[0].price}
                    dateItem={expenseItems[0].dateItem}
                />
                <EItems
                    title={expenseItems[1].title}
                    price={expenseItems[1].price}
                    dateItem={expenseItems[1].dateItem}
                />
                <EItems
                    title={expenseItems[2].title}
                    price={expenseItems[2].price}
                    dateItem={expenseItems[2].dateItem}
                />
                <EItems
                    title={expenseItems[3].title}
                    price={expenseItems[3].price}
                    dateItem={expenseItems[3].dateItem}
                />
            </Card>
        </div>
    );
};

export default App;
