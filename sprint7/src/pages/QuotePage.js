import { useCallback, useEffect } from "react";
import Modalinfo from "../components/Modalinfo";
import Backdrop from "../components/Backdrop";
import QuoteWebExtras from "../components/QuoteWebExtras";

const QuotePage = ({
  pageNum,
  langNum,
  total,
  isWebpage,
  quotes,
  initialQuotes,
  modalPageOpen,
  modalLangOpen,
  setTotal,
  setQuote,
  setModalPageOpen,
  setModalLangOpen,
  setIsWebpage,
  setPageNum,
  setLangNum,
}) => {
  const handlechange = useCallback(
    (e) => {
      console.log("I'm rendering");
      let inputId = e.target.id;
      let checkedStatus = e.target.checked;

      let modTotal = total; //initial modTotal
      let modNum = Number(e.target.value);

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
        inputId !== "pageNum" &&
        inputId !== "langNum" &&
        inputId !== "webpage"
      ) {
        console.log("add " + e.target.value + " to quote");
        modTotal += modNum;
      }
      if (
        !checkedStatus &&
        inputId !== "pageNum" &&
        inputId !== "langNum" &&
        inputId !== "webpage"
      ) {
        console.log("remove " + e.target.value + " from quote");
        modTotal -= modNum;
      }
      setTotal(modTotal);
      setQuote([
        { pageNum: pageNum },
        { langNum: langNum },
        { total: total },
        { isWebpage: isWebpage },
      ]);
    },
    [pageNum, langNum, total, isWebpage, setIsWebpage, setTotal]
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

  return (
    <div>
      Find the current market's quote<h2>What would you like to do?</h2>
      <div>
        <form>
          <div className="spacer">
            <input
              type="checkbox"
              id="webpage"
              value="500"
              onChange={handlechange}
            />
            <label htmlFor="webPage">A webpage (500 €)</label>
            <div>{isWebpage ? contentI : null}</div>
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
        </form>
      </div>
      <h2>
        Total Price:
        {isWebpage ? Number(pageNum) * Number(langNum) * 30 + total : total} €
      </h2>
      <div>
        {modalLangOpen ? <Modalinfo id="languages" number={langNum} /> : null}
        {modalPageOpen ? <Modalinfo id="pages" number={pageNum} /> : null}
        {modalLangOpen || modalPageOpen ? (
          <Backdrop onClick={closeModal} />
        ) : null}
      </div>
    </div>
  );
};

export default QuotePage;
