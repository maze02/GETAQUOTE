import classes from "./QuoteWebExtras.module.css";
import WebExtrasButtons from "./WebExtrasButtons";
//import App from "../App";

const QuoteWebExtras = ({ setPageNum, setLangNum, pageNum, langNum }) => {
  return (
    <div className={classes.card}>
      <label>Number of pages</label>
      <WebExtrasButtons
        className="pages"
        counter={pageNum}
        setPageNum={setPageNum}
      />

      <label>Number of languages</label>
      <WebExtrasButtons
        className="languages"
        counter={langNum}
        setLangNum={setLangNum}
      />
    </div>
  );
};

export default QuoteWebExtras;
