import { Route, Switch } from "react-router-dom";
import { useState } from "react";

import HomePage from "./pages/HomePage";
import QuotePage from "./pages/QuotePage";
import FavoritesPage from "./pages/FavoritesPage";
import MainNavigation from "./components/layout/MainNavigation";
//import Todo from "./components/Todo";
//import BudgetDetails from "./components/BudgetDetails";

const App = () => {
  const [total, setTotal] = useState(0);
  const [extras, setExtras] = useState(100);
  //const [checkboxState, setCheckbox] = useState();
  const [content, setContent] = useState(null);
  let contentI = (
    <fragment>
      <label>Number of pages</label>
      <input type="number" id="pageNum" min="1" onChange={handleExtra} />
      <br></br>
      <label>Number of languages</label>
      <input type="number" id="pageNum" min="1" onChange={handleExtra} />
    </fragment>
  );
  //let content = null;
  function handlechange(e) {
    let checkboxId = e.target.id;
    let checkedStatus = e.target.checked;
    //let content = null;

    let modTotal = total; //initial modTotal
    let modNum = Number(e.target.value);
    //console.log(e.target.checked);

    //console.log(e.target.value);
    if (checkboxId === "webpage" && checkedStatus) {
      console.log("webpage checkbox detected and ticked as true");
      setContent(contentI);
    }
    if (checkboxId === "webpage" && !checkedStatus) {
      console.log("webpage checkbox detected and ticked as true");
      setContent(null);
    }
    if (checkedStatus) {
      console.log("add " + e.target.value + " to quote");
      modTotal += modNum;
    } else {
      console.log("remove " + e.target.value + " from quote");
      modTotal -= modNum;
    }

    console.log("Changed");
    setTotal(modTotal);

    console.log("changed extras");
  }

  function handleExtra(e) {
    console.log("hey I'm responding to click");
    console.log("extras current val = " + extras);
    //setExtras(e.target.value);
    setExtras((prevState) => {
      return 7000;
    });
    console.log(extras);

    /* setExtras(100);
    if (e.target.value > 0) {
      let newExtra = extras + Number(e.target.value);

      console.log(newExtra);
      console.log("new extras value is " + extras);
    }
    */
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
          <input
            type="checkbox"
            id="webpage"
            value="500"
            onChange={handlechange}
          />
          <label htmlFor="webPage"> A webpage (500 €)</label>
          <div>{content}</div>
          <br></br>
          <br></br>
          <input
            type="checkbox"
            id="Seo"
            name="seo"
            value="300"
            onChange={handlechange}
          />
          <label htmlFor="Seo"> SEO consultation (300 €)</label>
          <br></br>
          <br></br>
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
      <h2>Total Price: {total} €</h2>
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
