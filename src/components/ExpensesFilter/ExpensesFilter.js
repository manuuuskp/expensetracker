const ExpensesFilter = (props) => {
    const changeSelectHandler = (e) => {
        props.onChangeExpensesFilter(e.target.value);
    }
  return (
    <div>
      <select onChange={changeSelectHandler} name="year">
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2021">2022</option>
      </select>
    </div>
  );
};

export default ExpensesFilter;
