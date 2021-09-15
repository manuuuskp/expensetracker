import { useState } from "react";
import ExpenseItem from "../ExpenseItem";
import Card from "../Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { facebookProvider } from "./../../config/authmethod";
import socialMediaAuth from "./../../services/auth";

export default function Expenses(props) {
  const [year, setYear] = useState("");
  const changeSelectFilter = (yearValue) => {
    setYear(yearValue);
  }

   const handleOnClick = async () => {
    console.log(facebookProvider);
    const res = await socialMediaAuth(facebookProvider);
    console.log(res);
  }

  return (
    <div>
      <ExpensesFilter onChangeExpensesFilter={changeSelectFilter}/>
      <Card className="expenses">
        {props.data.map((expense) => {
          return (
            <ExpenseItem
              id={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      </Card>
      <button onClick={handleOnClick}>SIGN IN WITH FACEBOOK</button>
    </div>
  );
}
