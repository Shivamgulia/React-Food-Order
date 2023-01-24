import classes from './QuoteItem.module.css';

import Item from './Item';
import useHttp from '../hooks/use-http';
import { orderCompleted } from '../lib/api';

function QuoteItem(props) {
  const { sendRequest, status } = useHttp(orderCompleted);

  let totalAmount = 0;
  if (props.orders) {
    props.orders.map((item) => (totalAmount += item.amount * item.price));
  }

  function completeOrder() {
    sendRequest(props.id);
  }

  if (status === 'completed') {
    // history.go(0);
    props.reload();
  }

  // if (error) {
  //   return (
  //     <div className="centered">
  //       <h1>Failed</h1>
  //     </div>
  //   );
  // }

  return (
    <div className={classes.qitemblock}>
      <h1>Table Number :- {props.id}</h1>
      {props.orders &&
        props.orders.map((item) => <Item key={item.id} order={item} />)}
      <h1>Rs. {totalAmount}</h1>
      <div className={classes.button}>
        <button onClick={completeOrder}>
          {status === 'pending' ? 'Wait Deleting' : 'Orders Completed'}
        </button>
      </div>
    </div>
  );
}

export default QuoteItem;
