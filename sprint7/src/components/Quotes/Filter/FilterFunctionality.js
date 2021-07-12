const FilterFunctionality = ({ quoteList, setFilterList }) => {
  //alphasort
  let arr = quoteList;
  let resArr = arr.sort(function (a, b) {
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
  setFilterList(resArr);
};

export default FilterFunctionality;
