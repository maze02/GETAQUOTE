import { Route, Switch } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import HomePage from "./pages/HomePage";
import QuotePage from "./pages/QuotePage";
import FavoritesPage from "./pages/FavoritesPage";
import MainNavigation from "./components/layout/MainNavigation";

import "./App.css";

//import ModalUI from "./components/ModalUI";
//import { classes } from "./App.module.css";
const App = () => {
  const [clientName, setClientName] = useState();
  const [clientSurname, setClientSurname] = useState();
  const [pageNum, setPageNum] = useState(1);
  const [langNum, setLangNum] = useState(1);
  const [isWebpage, setIsWebpage] = useState(false);
  const [isSeo, setIsSeo] = useState(false);
  const [isAds, setIsAds] = useState(false);
  const [modalPageOpen, setModalPageOpen] = useState(false);
  const [modalLangOpen, setModalLangOpen] = useState(false);
  const [total, setTotal] = useState(0);

  library.add(fab, faSearch);
  //local storage can only store strings :: use JSON.parse
  //1. check if there are quotes stored in local storage first
  let initialQuotes = JSON.parse(localStorage.getItem("quoteList"));
  //2. if no quotes found, initialise an empty array
  if (!initialQuotes) {
    initialQuotes = [];
  }
  //whatever is in the array, will be what is in the local storage
  const [quoteList, setQuoteList] = useState(initialQuotes);
  const [quotes, setQuote] = useState(initialQuotes);

  useEffect(() => {
    if (initialQuotes) {
      localStorage.setItem("quoteList", JSON.stringify(quoteList));
    } else {
      localStorage.setItem("quoteList", JSON.stringify([]));
      // I don't understand this second line of code
    }
  }, [quoteList]);

  return (
    <div className="App">
      <div>
        <MainNavigation />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/new-quote">
            <QuotePage
              quoteList={quoteList}
              clientName={clientName}
              clientSurname={clientSurname}
              pageNum={pageNum}
              langNum={langNum}
              total={total}
              isWebpage={isWebpage}
              isAds={isAds}
              isSeo={isSeo}
              quotes={quotes}
              initialQuotes={initialQuotes}
              modalPageOpen={modalPageOpen}
              modalLangOpen={modalLangOpen}
              setTotal={setTotal}
              setQuote={setQuote}
              setIsWebpage={setIsWebpage}
              setPageNum={setPageNum}
              setLangNum={setLangNum}
              setIsSeo={setIsSeo}
              setIsAds={setIsAds}
              setClientName={setClientName}
              setClientSurname={setClientSurname}
              setModalPageOpen={setModalPageOpen}
              setModalLangOpen={setModalLangOpen}
              setQuoteList={setQuoteList}
            />
          </Route>
          <Route path="/favorites">
            <FavoritesPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;

//learnings:
//1.do not add a component that has mutable state or has state that's going to change
//in another state because otherwise when the other function is muting the inner state, it's violating the outer state container by modifying it directly without using setState type function
//2.do not wrap an object as a variable if it's not an object and it's in Js land
//otherwise it's destructuring it
//3. use prev state to ensure update is immediate in the component
//4. use 'fab' instead of 'fas' in font awesome:
//https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react

//<i class="fas fa-search"></i>  NOPE
//<FontAwesomeIcon icon="search" />
/*
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
*/
