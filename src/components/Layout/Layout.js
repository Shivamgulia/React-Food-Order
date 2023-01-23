import classes from './Layout.module.css';

function Layout(props) {
  return (
    <div className={classes.layoutblock}>
      <div className={classes.layBlock}>{props.children}</div>
    </div>
  );
}

export default Layout;
