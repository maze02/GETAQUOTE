//import { Fragment } from "react";
const SavedQuoteCard = ({ list }) => {
  return list.map((item) => {
    return (
      <div>
        <ul>
          <li>Customer Reference Number : {item.id} </li>
          <li>Name:{item.nameQ}</li>
          <li>Surname:{item.surnameQ}</li>
          <li>Quote includes:</li>

          <li>Total:{item.totalQ}</li>
        </ul>
      </div>
    );
  });
};

export default SavedQuoteCard;

/*


 return list.map((item) => {
    return (
      <div>
        <ul>
          <li>Customer Reference Number : {item.id} </li>
          <li>Name:{item.nameQ}</li>
          <li>Surname:{item.surnameQ}</li>
          <li>Quote includes:</li>

          <li>Total:{item.totalQ}</li>
        </ul>
      </div>
    );
  });

 {webpageQ && (
          <Fragment>
            <li>A webpage (500 €)</li>
            <li>in {langNumQ} language</li>
            <li>containing {pageNumQ} page</li>
          </Fragment>
        )}
        {seoQ && <li>Seo consultation (300 €)</li>}
        {adsQ && <li>Google Ads (200 €)</li>}

*/
