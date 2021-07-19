import classes from "./QuoteWebExtras.module.css";
import WebExtrasButtons from "./WebExtrasButtons";
import { Panel } from "./QuoteWebExtrasStyled";

const QuoteWebExtras = ({
  pageNum,
  langNum,
  setPageNum,
  setLangNum,
  setQuote,
  modalPackage,
}) => {
  return (
    <Panel>
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
    </Panel>
  );
};

export default QuoteWebExtras;

//className={classes.card}
