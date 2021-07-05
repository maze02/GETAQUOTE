import classes from "./QuoteWebExtras.module.css";
import WebExtrasButtons from "./WebExtrasButtons";

//import App from "../App";

const QuoteWebExtras = ({
  pageNum,
  langNum,
  setPageNum,
  setLangNum,
  setQuote,
  modalPackage,
}) => {
  return (
    <div className={classes.card}>
      <label>Number of pages</label>
      <WebExtrasButtons
        className="pages"
        counter={pageNum}
        setPageNum={setPageNum}
        setQuote={setQuote}
        modalPackage={modalPackage}
        id="pages"
      />

      <label>Number of languages</label>
      <WebExtrasButtons
        className="languages"
        counter={langNum}
        setLangNum={setLangNum}
        setQuote={setQuote}
        modalPackage={modalPackage}
        id="languages"
      />
    </div>
  );
};

export default QuoteWebExtras;
