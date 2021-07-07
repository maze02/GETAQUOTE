import { Fragment, useState } from "react";
import FilterFunctionality from "./FilterFunctionality";
const FilterPanel = ({
  quoteList,
  setIsFiltered,
  isFiltered,
  handleFilter,
}) => {
  const [isTotalClicked, setIsTotalClicked] = useState(false);
  const [isAlphaSort, setIsAlphaSort] = useState(false);
  const [alphaSortC, setAlphaSortC] = useState(false);
  const [alphaNameC, setAlphaNameC] = useState(false);
  const [alphaSurnameC, setAlphaSurnameC] = useState(true);
  const [totalSortC, setTotalSortC] = useState(false);
  const [totalAscC, setTotalAscC] = useState(false);
  const [totalDesC, setTotalDesC] = useState(true);
  const [langDesC, setLangDesC] = useState(false);
  const [pageDesC, setPageDesC] = useState(false);

  const [webpageC, setWebpageC] = useState(false);
  const [seoC, setSeoC] = useState(false);
  const [adsC, setAdsC] = useState(false);

  const handleTotal = () => {
    if (isTotalClicked) {
      setIsTotalClicked(false);
    } else {
      setIsTotalClicked(true);
    }
  };

  const handleAlphaSort = () => {
    if (isAlphaSort) {
      setIsAlphaSort(false);
    } else {
      setIsAlphaSort(true);
    }
    /* why not work: is it because it cannot return a func that is called?
    isAlphaSort ? setIsAlphaSort(false) : setIsAlphaSort(true);
    */
  };

  let totalSortContent = (
    <div>
      <div>
        <input
          type="radio"
          id="quotePriceAsc"
          name="totalSort"
          onChange={handleFilter}
        />
        <label htmlFor="quotePriceAsc">Ascending Order</label>
      </div>
      <div>
        <input
          type="radio"
          id="quotePriceDes"
          name="totalSort"
          onChange={handleFilter}
        />
        <label htmlFor="quotePriceDes">Descending Order</label>
      </div>
    </div>
  );

  let alphaSortContent = (
    <Fragment>
      <div>
        <input
          type="radio"
          id="surnameSort"
          name="alpha"
          onChange={handleFilter}
        />
        <label htmlFor="surnameSort">surname</label>
      </div>
      <div>
        <input
          type="radio"
          id="firstNameSort"
          name="alpha"
          onChange={handleFilter}
        />
        <label htmlFor="firstNameSort">first name</label>
      </div>
    </Fragment>
  );

  //useEffect(handleTotal, [setIsTotalClicked, isTotalClicked]);
  return (
    <Fragment>
      <button type="button">Reset Filter</button>
      <form>
        <p>Sort by</p>
        <hr></hr>
        <div>
          <input
            type="radio"
            id="alphaSort"
            name="filter"
            onChange={handleFilter}
          />
          <label htmlFor="alphaSort">
            Alphabetical order
            <button type="button" onClick={handleAlphaSort}>
              +
            </button>
          </label>
          {isAlphaSort && alphaSortContent}
        </div>
        <div>
          <input
            type="radio"
            id="totalSort"
            name="filter"
            onChange={handleFilter}
          />
          <label htmlFor="totalSort">
            Total
            <button type="button" onClick={handleTotal}>
              +
            </button>
          </label>
          {isTotalClicked && totalSortContent}
        </div>
        <div>
          <input
            type="radio"
            id="langNumSort"
            name="filter"
            onChange={handleFilter}
          />
          <label htmlFor="langNumSort">Greatest number of Languages</label>
        </div>
        <div>
          <input
            type="radio"
            id="langNumSort"
            name="filter"
            onChange={handleFilter}
          />
          <label htmlFor="langNumSort">Greatest number of Pages</label>
        </div>
        <p>Filter quotes which include:</p>
        <hr></hr>
        <div>
          <input
            type="radio"
            id="webFilter"
            name="filter"
            onChange={handleFilter}
          />
          <label htmlFor="webFilter">A webpage</label>
        </div>
        <div>
          <input
            type="radio"
            id="seoFilter"
            name="filter"
            onChange={handleFilter}
          />
          <label htmlFor="seoFilter">SEO consultation</label>
        </div>
        <div>
          <input
            type="radio"
            id="adsFilter"
            name="filter"
            onChange={handleFilter}
          />
          <label htmlFor="adsFilter">Google Ads Campaign</label>
        </div>
      </form>
    </Fragment>
  );
};

export default FilterPanel;
