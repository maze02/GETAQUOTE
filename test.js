const handleFilter = 
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

      case "resetter":
        arr = quoteList;
        setFilterList(arr);

        setIsFiltered(false);
        console.log("I'm trying to reset the filter");
        setRerender(6);

        break;
      case "reset":
        searchRef.current.value = "";
        arr = quoteList;
        setFilterList(arr);

        setIsFiltered(false);
        console.log("I'm trying to reset the filter");
        setRerender(5);

        break;

      default:
        console.log("reached default case");
    }
  },
  [quoteList, setFilterList, setIsFiltered, setRerender, isFiltered]
);
