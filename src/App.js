import classes from './App.module.css';

import MainNavigation from './components/Layout/MainNavigation';
import Layout from './components/Layout/Layout';
import QuoteList from './components/Menu/QuoteList';

function App() {
  return (
    <div className={classes.topblock}>
      <MainNavigation />
      <Layout>
        <QuoteList />
      </Layout>
    </div>
  );
}

export default App;
