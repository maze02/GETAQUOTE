import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();
  //location.search returns the query string
  //const queryParams = new URLSearchParams(location.search);
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
    history.push(`/new-quote?${urlQuery}`);
  }, [
    history,
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
      <h3>Quote Url:</h3>
      <p className={classes.quote}>{`/view-quote?${queryString}`} </p>
    </div>
  );
};

export default CopyQuoteUrl;
/*

  Quote Url: `www.penguin.com/yoyeah+urerwer` pathname:{" "}
        {location.pathname}
        search: {location.search}

results in this error
        index.js:1 Warning: Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.


          /*
  if (!clientName) {
    queryParams.set(`clientName`, `${clientName}`);
  }
  */
// queryParams.set("clientName", "penguin");
/*
  history.push({
    pathname: location.pathname,
    search: queryParams.search,
  });
*/
//console.log(location);
