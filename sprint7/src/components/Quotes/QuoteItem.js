import { Fragment } from "react";
const QuoteItem = ({
  key,
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
    <div>
      <ul>
        <li>Customer Reference Number : {id} </li>
        <li>Name:{nameQ}</li>
        <li>Surname:{surnameQ}</li>
        <li>Quote includes:</li>
        {webpageQ && (
          <Fragment>
            <li>
              A webpage (500 €) containing{" "}
              {pageNumQ === 1 ? "1 page" : `${pageNumQ} pages`} in
              {langNumQ === 1 ? " 1 language" : ` ${langNumQ} languages`}
            </li>
          </Fragment>
        )}
        {seoQ && <li>Seo consultation (300 €)</li>}
        {adsQ && <li>Google Ads (200 €)</li>}
        <li>Total: {totalQ} €</li>
      </ul>
    </div>
  );
};

export default QuoteItem;
