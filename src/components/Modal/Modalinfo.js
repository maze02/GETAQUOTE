import classes from "./ModalUI.module.css";

const Modalinfo = ({ id, number, onClick }) => {
  if (id === "languages") {
    return (
      <div className={classes.modalContainer}>
        <p>
          Click on the buttons to state the number of languages you would like
          to use. At the moment you have {number} languages selected.
        </p>
      </div>
    );
  }

  if (id === "pages") {
    return (
      <div className={classes.modalContainer}>
        <p>
          Click on the buttons to state the number of pages you would like to
          use. At the moment you have {number} pages selected.
        </p>
      </div>
    );
  }
};

export default Modalinfo;
