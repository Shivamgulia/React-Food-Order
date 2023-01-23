import classes from './Item.module.css';

function Item(props) {
  return (
    <div className={classes.itemblock}>
      <h1>
        {props.order.name} X {props.order.amount}
      </h1>
      <h1>Rs. {props.order.price * props.order.amount}</h1>
    </div>
  );
}

export default Item;
