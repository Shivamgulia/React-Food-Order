import classes from './QuoteItem.module.css';
import Item from './Item';

function QuoteItem(props) {
  let totalAmount = 0;
  if (props.orders) {
    props.orders.map((item) => (totalAmount += item.amount * item.price));
  }
  return (
    <div className={classes.qitemblock}>
      <h1>Table Number :- {props.id}</h1>
      {props.orders &&
        props.orders.map((item) => <Item key={item.id} order={item} />)}
      <h1>Rs. {totalAmount}</h1>
      <div className={classes.button}>
        <button>Orders Completed</button>
      </div>
    </div>
  );
}

export default QuoteItem;
