import { useCallback, useEffect } from "react";
import Modalinfo from "../components/Modalinfo";
import Backdrop from "../components/Backdrop";
import QuoteWebExtras from "../components/QuoteWebExtras";
import QuoteFullList from "../components/QuoteFullList";
import { v4 as uuidv4 } from "uuid";
import classes from "./QuotePage.module.css";

const QuotePage = ({
  clientName,
  clientSurname,
  pageNum,
  langNum,
  total,
  isWebpage,
  isSeo,
  isAds,
  quotes,
  initialQuotes,
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
}) => {
  const handlechange = useCallback(
    (e) => {
      console.log("I'm rendering");
      let inputId = e.target.id;
      let checkedStatus = e.target.checked;

      let modTotal = total; //initial modTotal
      let modNum = Number(e.target.value);

      if (inputId === "clientName") {
        setClientName((prev) => e.target.value);
      }
      if (inputId === "clientSurname") {
        setClientSurname((prev) => e.target.value);
      }

      if (inputId === "webpage" && checkedStatus) {
        modTotal += modNum;
        setIsWebpage(true);
      }
      if (inputId === "webpage" && !checkedStatus) {
        modTotal -= modNum;
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

      if (
        checkedStatus &&
        (inputId === "googleAdsCampaign" || inputId === "Seo")
      ) {
        console.log("add " + e.target.value + " to quote");
        modTotal += modNum;
      }
      if (
        !checkedStatus &&
        (inputId === "googleAdsCampaign" || inputId === "Seo")
      ) {
        console.log("remove " + e.target.value + " from quote");
        modTotal -= modNum;
      }
      setTotal(modTotal);
      setQuote([
        { clientName: clientName },
        { clientSurname: clientSurname },
        { pageNum: pageNum },
        { langNum: langNum },
        { total: total },
        { isWebpage: isWebpage },
      ]);
    },
    [
      clientName,
      clientSurname,
      pageNum,
      langNum,
      total,
      isWebpage,
      setIsWebpage,
      setIsSeo,
      setIsAds,
      setTotal,
      setClientName,
      setClientSurname,
      setQuote,
    ]
  );

  useEffect(() => {
    localStorage.setItem("quotes", JSON.stringify(quotes));
  }, [
    initialQuotes,
    quotes,
    total,
    pageNum,
    langNum,
    isWebpage,
    setTotal,
    setPageNum,
    setLangNum,
    setIsWebpage,
    handlechange,
    setClientName,
    setClientSurname,
    setQuote,
  ]);
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
  const closeModal = () => {
    console.log("I clicked on the modal");
    setModalLangOpen(false);
    setModalPageOpen(false);
  };

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
        console.log("in addToQuoteList function");
        console.log("quote added" + quote);
        console.log("quoteList is" + quoteList);
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
      console.log("quote id is " + Quote.id);
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

  /*creating unique id
  1. npm i uuid -> in the terminal
  2. import it @ the top:  import { v4 as uuidv4 } from "uuid";
  */

  return (
    <div className={classes.container}>
      <div>
        <h2>Generate a quote</h2>
        <h3>What would you like to do?</h3>
        <form>
          <p>Client Details</p>
          <div className="spacer">
            <label htmlFor="clientName">Name</label>
            <input type="text" id="clientName" onChange={handlechange} />
          </div>
          <div className="spacer">
            <label htmlFor="clientSurname">Surname</label>
            <input type="text" id="clientSurname" onChange={handlechange} />
          </div>
          <p>Quote Details</p>
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
          <input
            type="checkbox"
            id="googleAdsCampaign"
            name="googleAdsCampaign"
            value="200"
            onChange={handlechange}
          />
          <label htmlFor="googleAdsCampaign">Google Ads Campaign (200 €)</label>
          <br></br>
          <h2>
            Total Price:
            {isWebpage ? Number(pageNum) * Number(langNum) * 30 + total : total}
            €
          </h2>
          <div>
            {modalLangOpen && <Modalinfo id="languages" number={langNum} />}
            {modalPageOpen && <Modalinfo id="pages" number={pageNum} />}
            {(modalLangOpen || modalPageOpen) && (
              <Backdrop onClick={closeModal} />
            )}
          </div>
          <button type="button" onClick={handleSubmitForm}>
            Save Quote
          </button>
        </form>
      </div>

      <div>
        <h2>Saved Quotes</h2>
        {quoteList.length === 0 && <p>No quotes added yet</p>}
        <QuoteFullList list={quoteList} />
      </div>
    </div>
  );
};

export default QuotePage;
/*
  {quoteList > 0 && <savedQuoteCard list={quoteList} />}
const displayQuotes = () => {
    if (quoteList.length === null) {
      return <p>No quotes added yet</p>;
    } else {
      return 
      });
    }
  };
*/
/*Before with nothing
const displayQuotes = () => {
    if (quoteList.length === null) {
      return <p>No quotes added yet</p>;
    } else {
      return quoteList.map((quote) => {
        return (
          <savedQuoteCard
            id={quote.id}
            nameQ={quote.nameQ}
            surnameQ={quote.surnameQ}
            langNumQ={quote.langNumQ}
            pageNumQ={quote.pageNumQ}
            seoQ={quote.seoQ}
            adsQ={quote.adsQ}
            totalQ={quote.totalQ}
          />
        );
      });
    }
  };

*/
