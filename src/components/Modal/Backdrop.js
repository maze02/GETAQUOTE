import classes from "./ModalUI.module.css";

const Backdrop = (props) => {
  return <div className={classes.modalBackground} onClick={props.onClick} />;
};

export default Backdrop;
