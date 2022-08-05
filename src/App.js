import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 34.32,
      date: new Date(2022, 7, 3),
    },
    {
      id: "e2",
      title: "Some books",
      amount: 37.32,
      date: new Date(2022, 8, 3),
    },
    {
      id: "e3",
      title: "Date Night",
      amount: 90.32,
      date: new Date(2022, 5, 8),
    },
    {
      id: "e4",
      title: "Car Insurance",
      amount: 243.32,
      date: new Date(2021, 1, 12),
    },
  ];

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };
  return (
    <div>
      <NewExpense onSaveExpenseData={saveExpenseDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
