import { Fragment } from "react";
import classes from "./QuoteWebExtras.module.css";
import WebExtrasButtons from "./WebExtrasButtons";

const QuoteWebExtras = (props) => {
  return (
    <div className={classes.card}>
      <label>Number of pages</label>
      <input
        type={props.type}
        id={props.id}
        min={props.min}
        onChange={props.handleExtra}
      />

      <label>Number of languages</label>
      <input
        type={props.type}
        id={props.id}
        min={props.min}
        onChange={props.handleExtra}
      />
      <WebExtrasButtons />
    </div>
  );
};

export default QuoteWebExtras;
