import { Route, Switch } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

import HomePage from "./pages/HomePage";
import QuotePage from "./pages/QuotePage";
import FavoritesPage from "./pages/FavoritesPage";
import MainNavigation from "./components/layout/MainNavigation";
import QuoteWebExtras from "./components/QuoteWebExtras";
import "./App.css";
import Modalinfo from "./components/Modalinfo";
import Backdrop from "./components/Backdrop";
//import ModalUI from "./components/ModalUI";
//import { classes } from "./App.module.css";
const App = () => {
  const [pageNum, setPageNum] = useState(1);
  const [langNum, setLangNum] = useState(1);
  const [isWebpage, setIsWebpage] = useState(false);
  const [modalPageOpen, setModalPageOpen] = useState(false);
  const [modalLangOpen, setModalLangOpen] = useState(false);
  const [total, setTotal] = useState(0);

  //local storage can only store strings :: use JSON.parse
  let initialQuotes = JSON.parse(localStorage.getItem("quotes"));
  if (!initialQuotes) {
    initialQuotes = [];
  }
  const [quotes, setQuote] = useState(initialQuotes);
  //const [quotes, setQuotes] = useState(initialQuotes);

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

  const closeModal = () => {
    console.log("I clicked on the modal");
    setModalLangOpen(false);
    setModalPageOpen(false);
  };

  return (
    <div className="App">
      <div>
        <MainNavigation />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/new-quote">
            <QuotePage />
          </Route>
          <Route path="/favorites">
            <FavoritesPage />
          </Route>
        </Switch>
      </div>

      <h2>What would you like to do?</h2>
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
/*
      <h1>My Todos</h1>
      <Todo text="Print Level2" />
      <Todo text="Calculate what lessons to complete by 6" />
      <Todo text="Calculate what lessons to complete by 7" />

            <BudgetDetails />
*/
/*
import { useState } from "react";
const BudgetDetails = () => {
  const [total, setTotal] = useState(55);

  const handlechange = () => {
    console.log("I clicked the checkbox");
  };

  return (
    <div>
      <form>
        <input type="checkbox" id="webPage" name="webPage" value="500" />
        <label htmlFor="webPage"> A webpage (500 €)</label>
        <br></br>
        <br></br>
        <input type="checkbox" id="Seo" name="seo" value="300" />
        <label htmlFor="Seo"> SEO consultation (300 €)</label>
        <br></br>
        <br></br>
        <input
          type="checkbox"
          id="googleAdsCampaign"
          name="googleAdsCampaign"
          value="200"
        />
        <label htmlFor="googleAdsCampaign"> Google Ads Campaign (200 €)</label>
        <br></br>
      </form>

      <p>testing sum total = {total}</p>
    </div>
  );
};

export default BudgetDetails;


*/
export default App;

//learnings:
//1.do not add a component that has mutable state or has state that's going to change
//in another state because otherwise when the other function is muting the inner state, it's violating the outer state container by modifying it directly without using setState type function
//2.do not wrap an object as a variable if it's not an object and it's in Js land
//otherwise it's destructuring it
//3. use prev state to ensure update is immediate in the component

/*
  useEffect(() => {
    if (initialQuotes) {
      setQuotes([
        { total: total },
        { pageNum: pageNum },
        { langNum: langNum },
        { isWebpage: isWebpage },
      ]);
      localStorage.setItem("quotes", JSON.stringify(quotes));
    } else {
      setQuotes([
        { total: total },
        { pageNum: pageNum },
        { langNum: langNum },
        { isWebpage: isWebpage },
      ]);
      localStorage.setItem("quotes", JSON.stringify(quotes));
    }
  }, [
    quotes,
    total,
    pageNum,
    langNum,
    isWebpage,
    setTotal,
    setPageNum,
    setLangNum,
    setIsWebpage,
  ]);


*/
