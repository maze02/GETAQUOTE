import { Route, Switch } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

import HomePage from "./pages/HomePage";
import QuotePage from "./pages/QuotePage";
import FavoritesPage from "./pages/FavoritesPage";
import MainNavigation from "./components/layout/MainNavigation";

import "./App.css";

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
              pageNum={pageNum}
              langNum={langNum}
              total={total}
              isWebpage={isWebpage}
              quotes={quotes}
              initialQuotes={initialQuotes}
              modalPageOpen={modalPageOpen}
              modalLangOpen={modalLangOpen}
              setTotal={setTotal}
              setQuote={setQuote}
              setIsWebpage={setIsWebpage}
              setPageNum={setPageNum}
              setLangNum={setLangNum}
              setModalPageOpen={setModalPageOpen}
              setModalLangOpen={setModalLangOpen}
              setQuote={setQuote}
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
