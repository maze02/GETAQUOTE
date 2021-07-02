import classes from "./WebExtrasButtons.module.css";

const WebExtrasButtons = () => {
  return (
    <div className={classes.container}>
      <button className={classes.button}>+</button>
      <div className={classes.counter}>{5}</div>
      <button className={classes.button}>-</button>
    </div>
  );
};

export default WebExtrasButtons;
//prop
//props.pageNum
//onClick={props.increaseCounter}
//onClick={props.decreaseCounter}
