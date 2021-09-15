import "./ExpenseDate.css";

export default function ExpenseDate(props) {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString("en-US",{month: 'long'});
    const date = props.date.toLocaleString("en-US",{day: 'numeric'});
    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{date}</div>
            <div className="expense-date__day">{year}</div>
        </div>
    );
}