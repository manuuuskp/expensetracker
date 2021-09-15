import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const getInputValues = (inputValues) => {
        props.getInputValues(inputValues);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onClickSubmit={getInputValues}/>
        </div>
    )
}

export default NewExpense