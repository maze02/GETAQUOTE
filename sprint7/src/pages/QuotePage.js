import { useCallback, useEffect } from "react";
import Modalinfo from "../components/Modalinfo";
import Backdrop from "../components/Backdrop";
import QuoteWebExtras from "../components/QuoteWebExtras";

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
        console.log("webpage checkbox detected and ticked as true");
        console.log(e.target.value);
        console.log(modNum);
        setIsWebpage(true);
      }
      if (inputId === "webpage" && !checkedStatus) {
        modTotal -= modNum;
        console.log("webpage checkbox detected and ticked as true");
        setIsWebpage(false);
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

  //create a new component that manages the functionality of receiving new quotes and distributing new quotes
  /*  function QuoteCreator(
    cId,
    cName,
    cSurname,
    cWebpage,
    cLangNum,
    cPageNum,
    cSeo,
    cAds,
    cTotal
  ) {
    this.id = cId;
    this.qName = cName;
    this.qSurname = cSurname;
    this.qWebpage = cWebpage;
    this.qLangNum = cLangNum;
    this.qPageNum = cPageNum;
    this.qSeo = cSeo;
    this.qAds = cAds;
    this.qTotal = cTotal;
  }
*/

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
      qName: cName,
      qSurname: cSurname,
      qWebpage: cWebpage,
      qLangNum: cLangNum,
      qPageNum: cPageNum,
      qSeo: cSeo,
      qAds: cAds,
      qTotal: cTotal,
    };
  };

  const addToQuoteList = (quote) => {
    setQuoteList([...quoteList, quote]);
    console.log("in addToQuoteList function");
    console.log("quote added" + quote);
    console.log("quoteList is" + quoteList);
  };

  const handleSubmitForm = () => {
    //adds quote
    /*
    const Quote = new QuoteCreator(
      23,
      clientName,
      clientSurname,
      isWebpage,
      langNum,
      pageNum,
      isSeo,
      isAds,
      total
    );
*/ const Quote = new QuoteCreator(
      23,
      clientName,
      clientSurname,
      isWebpage,
      langNum,
      pageNum,
      isSeo,
      isAds,
      total
    );

    //clears form
    addToQuoteList(Quote);
  };

  return (
    <div>
      <h2>Generate a quote</h2>
      <h3>What would you like to do?</h3>
      <div>
        <form onSubmit={handleSubmitForm}>
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
          <button type="button">Save Quote</button>
        </form>
      </div>

      <div>
        <h2>Saved Quotes</h2>
      </div>
    </div>
  );
};

export default QuotePage;
