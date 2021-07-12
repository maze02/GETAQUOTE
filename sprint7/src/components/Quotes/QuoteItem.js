import { Fragment } from "react";
import classes from "./QuoteItem.module.css";
const QuoteItem = ({
  id,
  nameQ,
  surnameQ,
  webpageQ,
  langNumQ,
  pageNumQ,
  seoQ,
  adsQ,
  totalQ,
}) => {
  return (
    <div className={classes.item}>
      <ul>
        <li>
          <span className={classes.thicker}>Customer Reference Number :</span>{" "}
          {id}{" "}
        </li>
        <li>
          <span className={classes.thicker}>Name:</span>
          {nameQ}
        </li>
        <li>
          <span className={classes.thicker}>Surname:</span>
          {surnameQ}
        </li>
        <li>
          <span className={classes.thicker}>Quote includes:</span>
        </li>
        {webpageQ && (
          <Fragment>
            <li>
              A webpage (500 €) containing{" "}
              {pageNumQ === 1 ? "1 page" : `${pageNumQ} pages`} in
              {langNumQ === 1 ? " 1 language" : ` ${langNumQ} languages`}
            </li>
          </Fragment>
        )}
        {seoQ && (
          <li>
            <span className={classes.thicker}>Seo consultation (300 €)</span>
          </li>
        )}
        {adsQ && (
          <li>
            <span className={classes.thicker}>Google Ads (200 €)</span>
          </li>
        )}
        <li>
          <span className={classes.thicker}>Total: </span>
          {totalQ} €
        </li>
      </ul>
    </div>
  );
};

export default QuoteItem;
