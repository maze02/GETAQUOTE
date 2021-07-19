import { classes } from "./ModalUI.module.css";

const ModalUI = (props) => {
  return (
    <div className={classes.modalBackground}>
      <div className={classes.modalContainer}>{props.children}</div>
    </div>
  );
};

export default ModalUI;
