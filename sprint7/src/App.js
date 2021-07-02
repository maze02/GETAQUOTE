import { Route, Switch } from "react-router-dom";
import { useState, Fragment, useEffect } from "react";

import HomePage from "./pages/HomePage";
import QuotePage from "./pages/QuotePage";
import FavoritesPage from "./pages/FavoritesPage";
import MainNavigation from "./components/layout/MainNavigation";
import QuoteWebExtras from "./components/QuoteWebExtras";
import classes from "./App.module.css";
//import Todo from "./components/Todo";
//import BudgetDetails from "./components/BudgetDetails";

const App = () => {
  const [total, setTotal] = useState(0);
  const [content, setContent] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [langNum, setLangNum] = useState(1);
  const [isWebpage, setIsWebpage] = useState(false);
  let contentI = (
    <QuoteWebExtras
      type="number"
      id="pageNumber"
      min="1"
      onChange={handleExtra}
    />
  );

  function handlechange(e) {
    console.log("I'm rendering");
    let inputId = e.target.id;
    let checkedStatus = e.target.checked;
    //let content = null;

    let modTotal = total; //initial modTotal
    let modNum = Number(e.target.value);

    if (inputId === "webpage" && checkedStatus) {
      modTotal += modNum;
      console.log("webpage checkbox detected and ticked as true");
      console.log(e.target.value);
      console.log(modNum);
      setContent(contentI);
      setIsWebpage(true);
    }
    if (inputId === "webpage" && !checkedStatus) {
      modTotal -= modNum;
      console.log("webpage checkbox detected and ticked as true");
      setContent(null);
      setIsWebpage(false);
    }

    //if input = to extras, add to extra
    //problem is whatever is added to the extra needs to be added at the end
    //final result always needs to reflect the latest input
    /*
    if (inputId === "pageNum") {
      setPageNum((preV) => {
        return e.target.value;
      });
      console.log(e.target.value);
    }

    if (inputId === "langNum") {
      setLangNum((preV) => {
        return e.target.value;
      });
    }
*/
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

    console.log("Changed");
    let totalExtra = 0;
    //let totalExtra = Number(pageNum) * Number(langNum) * 30;
    setTotal(modTotal);
  }

  function handleExtra(e) {
    if (e.target.id === "pageNum") {
      console.log(e.target.value);
      //setPageNum(e.target.value);
      //setPageNum(9000);
      setPageNum((preV) => {
        return e.target.value;
      });
      console.log("this is pageNum " + pageNum);
    }
    if (e.target.id === "langNum") {
      console.log(e.target.value);
      //setPageNum(e.target.Value);
      //setPageNum(9000);
      setLangNum((preV) => {
        return e.target.value;
      });
      console.log("this is langNum " + pageNum);
    }
    //console.log("extras current val = " + extras);
  }

  return (
    <div>
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
          <div className={classes.spacer}>
            <input
              type="checkbox"
              id="webpage"
              value="500"
              onChange={handlechange}
            />
            <label htmlFor="webPage">A webpage (500 €)</label>
            <div>{content}</div>
          </div>
          <div className={classes.spacer}>
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
        {isWebpage ? total + Number(pageNum) * Number(langNum) * 30 : total} €
      </h2>
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
