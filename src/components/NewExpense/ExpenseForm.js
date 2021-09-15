import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const setTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const setAmountHandler = (e) => {
    setAmount(e.target.value);
  };
  const setDateHandler = (e) => {
    setDate(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    const inputValues = {
      title,
      amount,
      date: new Date(date),
      id: Math.random().toString()
    };
    props.onClickSubmit(inputValues);

    setTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={setTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={amount} onChange={setAmountHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2022-12-31"
            value={date}
            onChange={setDateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
