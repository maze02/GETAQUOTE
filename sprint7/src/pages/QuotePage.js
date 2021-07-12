import { useState, useCallback, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Modalinfo from "../components/Modal/Modalinfo";
import Backdrop from "../components/Modal/Backdrop";
import QuoteWebExtras from "../components/Quotes/QuoteExtraDetails/QuoteWebExtras";
import QuoteFullList from "../components/Quotes/QuoteFullList";
import { v4 as uuidv4 } from "uuid";
import classes from "./QuotePage.module.css";
import FilterPanel from "../components/Quotes/Filter/FilterPanel";
import Search from "../components/Quotes/Search/Search";
import CopyQuoteUrl from "../components/Quotes/CopyQuoteUrl";
import Card from "../components/UI/Card";

const QuotePage = ({
  clientName,
  clientSurname,
  pageNum,
  langNum,
  total,
  isWebpage,
  isSeo,
  isAds,
  quoteList,
  modalPageOpen,
  modalLangOpen,
  setClientName,
  setClientSurname,
  setTotal,
  setQuote,
  setModalPageOpen,
  setModalLangOpen,
  setIsWebpage,
  setIsSeo,
  setIsAds,
  setPageNum,
  setLangNum,
  setQuoteList,
  setFilterList,
  filterList,
  closeModal,
}) => {
  const [isFilter, setIsFilter] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [isRerender, setRerender] = useState(0); //to trigger render when it's not rendering
  const searchRef = useRef(null);

  let urlObj = {};
  const location = useLocation();
  console.log(location);
  const [isParams, setParams] = useState(location.search);
  const [isUrlData, setIsUrlData] = useState(false);
  console.log(typeof isParams);
  useEffect(() => {
    if (isParams !== "") {
      setIsUrlData(true);
      console.log("render new info");
      const queryParams = new URLSearchParams(location.search);
      for (const [key, value] of queryParams) {
        if (urlObj[key] === undefined) {
          urlObj[key] = value;
        }
        setClientName(JSON.parse(urlObj.clientName));
        setClientSurname(JSON.parse(urlObj.clientSurname));
        setPageNum(JSON.parse(urlObj.pageNum));
        setIsAds(JSON.parse(urlObj.isAds));
        setIsSeo(JSON.parse(urlObj.isSeo));
        setIsWebpage(JSON.parse(urlObj.isWebpage));
        setLangNum(Number(urlObj.langNum));
        setPageNum(Number(urlObj.pageNum));
      }
      console.log(urlObj);
    } else {
      console.log("don't render new info");
    }
  }, [isParams, location.search, setClientName, setClientSurname]);

  const handlechange = useCallback(
    (e) => {
      console.log("I'm rendering");
      let inputId = e.target.id;
      let checkedStatus = e.target.checked;

      if (inputId === "clientName") {
        setClientName((prev) => e.target.value);
      }
      if (inputId === "clientSurname") {
        setClientSurname((prev) => e.target.value);
      }

      if (inputId === "webpage" && checkedStatus) {
        setIsWebpage(true);
      }
      if (inputId === "webpage" && !checkedStatus) {
        setIsWebpage(false);
      }

      if (inputId === "Seo" && checkedStatus) {
        setIsSeo(true);
      }

      if (inputId === "Seo" && !checkedStatus) {
        setIsSeo(false);
      }

      if (inputId === "googleAdsCampaign" && checkedStatus) {
        setIsAds(true);
      }

      if (inputId === "googleAdsCampaign" && !checkedStatus) {
        setIsAds(false);
      }
    },
    [setIsWebpage, setIsSeo, setIsAds, setClientName, setClientSurname]
  );

  let contentI = (
    <QuoteWebExtras
      setLangNum={setLangNum}
      setPageNum={setPageNum}
      langNum={langNum}
      pageNum={pageNum}
      setQuote={setQuote}
      modalPackage={{
        setModalLangOpen: setModalLangOpen,
        setModalPageOpen: setModalPageOpen,
        modalLangOpen: modalLangOpen,
        modalPageOpen: modalPageOpen,
      }}
    />
  );

  const QuoteCreator = (
    cId,
    cName,
    cSurname,
    cWebpage,
    cLangNum,
    cPageNum,
    cSeo,
    cAds,
    cTotal
  ) => {
    return {
      id: cId,
      nameQ: cName,
      surnameQ: cSurname,
      webpageQ: cWebpage,
      langNumQ: cLangNum,
      pageNumQ: cPageNum,
      seoQ: cSeo,
      adsQ: cAds,
      totalQ: cTotal,
    };
  };

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      const addToQuoteList = (quote) => {
        setQuoteList([...quoteList, quote]);
      };

      let id = uuidv4();
      const Quote = QuoteCreator(
        id,
        clientName,
        clientSurname,
        isWebpage,
        langNum,
        pageNum,
        isSeo,
        isAds,
        total
      );

      addToQuoteList(Quote);
    },
    [
      setQuoteList,
      clientName,
      clientSurname,
      isSeo,
      isWebpage,
      langNum,
      pageNum,
      quoteList,
      total,
      isAds,
    ]
  );
  const resetFilterHandler = () => {
    setFilterList(quoteList);
    setIsFiltered(false);
  };

  const handleFilter = useCallback(
    (e) => {
      setIsFiltered(true);
      let inputId = e.target.id;
      let arr = [];
      let resArr = [];

      switch (inputId) {
        case "alphaSort":
          //alpha sort by surname
          //-------------------------
          arr = quoteList;
          let alphaSort = arr.sort(function (a, b) {
            let nameA = a.surnameQ.toUpperCase(); // ignore upper and lowercase
            let nameB = b.surnameQ.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            // names must be equal
            return 0;
          });
          setFilterList(alphaSort);
          setRerender(1);
          break;

        case "totalSort":
          //sort by total descending
          //-------------------------
          arr = quoteList;
          let totalSort = arr.sort(function (a, b) {
            return b.totalQ - a.totalQ;
          });
          setFilterList(totalSort);
          setRerender(2);
          break;
        //sort by pageNum descending
        //-----------------------------
        case "pageNumSort":
          arr = quoteList;
          let numSort = arr.sort(function (a, b) {
            return b.pageNumQ - a.pageNumQ;
          });
          setFilterList(numSort);
          setRerender(3);
          break;
        case "langNumSort":
          arr = quoteList;
          //sort by langNum descending
          //-----------------------------
          resArr = arr.sort(function (a, b) {
            return b.langNumQ - a.langNumQ;
          });
          setFilterList(resArr);
          setRerender(4);
          break;

        case "webFilter":
          arr = quoteList;
          resArr = arr.filter((a) => a.webpageQ === true);
          setFilterList(resArr);
          break;

        case "seoFilter":
          arr = quoteList;
          resArr = arr.filter((a) => a.seoQ === true);
          setFilterList(resArr);
          break;
        case "adsFilter":
          arr = quoteList;
          resArr = arr.filter((a) => a.adsQ === true);
          setFilterList(resArr);
          break;

        case "reset":
          arr = quoteList;
          setIsFiltered(false);
          searchRef.current.value = "";
          setFilterList(quoteList);
          setRerender(5);

          break;

        default:
          console.log("reached default case");
      }
    },
    [quoteList, setFilterList, setIsFiltered, setRerender]
  );
  /*creating unique id
  1. npm i uuid -> in the terminal
  2. import it @ the top:  import { v4 as uuidv4 } from "uuid";
  */
  const handleSearch = (e) => {
    setIsFiltered(true);
    let arr = quoteList;
    let searchArr = arr.filter((a) => a.surnameQ.startsWith(e.target.value));
    console.log("I'm typing " + e.target.value);
    console.log(arr);
    console.log(searchArr);
    setFilterList(searchArr);
  };

  const handleShowFilterPanel = () => {
    if (!isFilter) {
      setIsFilter(true);
    } else {
      setIsFilter(false);
    }
  };

  let filterButtonContent = (
    <button type="button" className="btn" onClick={handleShowFilterPanel}>
      Filter
    </button>
  );

  useEffect(() => {
    let seoD = isSeo ? 300 : 0;
    let adsD = isAds ? 200 : 0;
    let webD = 0;
    let pageD = 0;
    let langD = 0;

    if (isWebpage) {
      webD = 500;
      pageD = pageNum;
      langD = langNum;
    } else {
      webD = 0;
      pageD = 0;
      langD = 0;
    }

    let totalD = seoD + adsD + (webD + pageD * langD * 30);

    setTotal(totalD);
  }, [isWebpage, isSeo, isAds, total, pageNum, langNum, setTotal, setQuote]);

  return (
    <div className={classes.container}>
      <div className={classes.col1}>
        <div>
          <h2>Generate a quote</h2>
          <h3>What would you like to do?</h3>
        </div>
        <Card>
          <form>
            <h3>Client Details</h3>
            <div className="spacer" className={classes.control}>
              <label htmlFor="clientName">Name</label>
              <input
                type="text"
                id="clientName"
                onChange={handlechange}
                placeholder={isUrlData ? urlObj.clientName : undefined}
              />
            </div>
            <div className="spacer" className={classes.control}>
              <label htmlFor="clientSurname">Surname</label>
              <input
                type="text"
                id="clientSurname"
                onChange={handlechange}
                placeholder={isUrlData ? urlObj.clientSurname : undefined}
              />
            </div>
            <h3>Quote Details</h3>
            <div className="spacer">
              <input
                type="checkbox"
                id="webpage"
                value="500"
                onChange={handlechange}
              />
              <label htmlFor="webPage">A webpage (500 €)</label>
              <div>{isWebpage && contentI}</div>
            </div>
            <div className="spacer">
              <input
                type="checkbox"
                id="Seo"
                name="seo"
                value="300"
                onChange={handlechange}
              />
              <label htmlFor="Seo">SEO consultation (300 €)</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="googleAdsCampaign"
                name="googleAdsCampaign"
                value="200"
                onChange={handlechange}
              />
              <label htmlFor="googleAdsCampaign">
                Google Ads Campaign (200 €)
              </label>
            </div>
            <br></br>
            <h3>
              Total Price:
              {total}€
            </h3>
            <div>
              {modalLangOpen && <Modalinfo id="languages" number={langNum} />}
              {modalPageOpen && <Modalinfo id="pages" number={pageNum} />}
              {(modalLangOpen || modalPageOpen) && (
                <Backdrop onClick={closeModal} />
              )}
            </div>
            <button className="btn" type="button" onClick={handleSubmitForm}>
              Save Quote
            </button>
          </form>

          <div>
            <CopyQuoteUrl
              clientName={clientName}
              clientSurname={clientSurname}
              pageNum={pageNum}
              langNum={langNum}
              isWebpage={isWebpage}
              isSeo={isSeo}
              isAds={isAds}
              total={total}
            />
          </div>
        </Card>
      </div>

      <div className={classes.col2}>
        <h2>Saved Quotes</h2>
        {quoteList.length !== 0 && (
          <Search handleSearch={handleSearch} searchRef={searchRef} />
        )}
        {quoteList.length !== 0 && filterButtonContent}
        {quoteList.length !== 0 && isFilter && (
          <FilterPanel
            quoteList={quoteList}
            handleFilter={handleFilter}
            setIsFiltered={setIsFiltered}
            resetFilterHandler={resetFilterHandler}
          />
        )}
        {quoteList.length === 0 && <p>No quotes added yet</p>}
        {!isFiltered && quoteList.length !== 0 && (
          <QuoteFullList list={quoteList} />
        )}
        {isFiltered && <QuoteFullList list={filterList} />}
      </div>
    </div>
  );
};

export default QuotePage;
