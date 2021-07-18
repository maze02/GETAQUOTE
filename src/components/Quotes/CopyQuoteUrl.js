import { useState, useEffect } from "react";
import classes from "./CopyQuoteUrl.module.css";

const CopyQuoteUrl = ({
  clientName,
  clientSurname,
  pageNum,
  langNum,
  isWebpage,
  isSeo,
  isAds,
  total,
}) => {
  const [queryString, setQueryString] = useState("");
  const queryParams = new URLSearchParams({
    clientName: clientName,
    clientSurname: clientSurname,
    isWebpage: isWebpage,
    langNum: langNum,
    pageNum: pageNum,
    isSeo: isSeo,
    isAds: isAds,
    total: total,
  });

  let urlQuery = queryParams.toString();

  useEffect(() => {
    setQueryString(urlQuery);
  }, [
    urlQuery,
    clientName,
    clientSurname,
    isWebpage,
    langNum,
    pageNum,
    isSeo,
    isAds,
    total,
  ]);

  return (
    <div>
      <h3>Shareable Quote Url:</h3>
      <p className={classes.quote}>{`/view-quote?${queryString}`} </p>
    </div>
  );
};

export default CopyQuoteUrl;

//location.search returns the query string
//const queryParams = new URLSearchParams(location.search);
