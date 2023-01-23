import { useEffect } from 'react';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
import useHttp from '../hooks/use-http';
import { getTables } from '../lib/api';

function QuoteList() {
  const { sendRequest, status, error, data: loadedTables } = useHttp(getTables);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (error) {
    return <div>{error}</div>;
  }

  if (status === 'pending') {
    return <div>Loading ......</div>;
  }

  return (
    <div className={classes.listblock}>
      {loadedTables &&
        loadedTables.map((item) => (
          <QuoteItem key={item.id} id={item.id} orders={item.order} />
        ))}
    </div>
  );
}

export default QuoteList;
