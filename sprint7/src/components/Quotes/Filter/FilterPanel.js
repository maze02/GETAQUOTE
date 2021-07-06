import { useState, useCallback, useEffect, Fragment } from "react";
const FilterPanel = ({ handleTotal, isTotalClicked }) => {
  const [isAlphaSort, setIsAlphaSort] = useState(false);

  const handleAlphaSort = () => {
    if (isAlphaSort) {
      setIsAlphaSort(false);
    } else {
      isAlphaSort(true);
    }
  };

  const handleCheckbox = () => {};
  let totalSortContent = (
    <div>
      <div>
        <input
          type="checkbox"
          id="quotePriceAsc"
          name="quotePriceAsc"
          onChange={handleCheckbox}
        />
        <label htmlFor="quotePriceAsc">Ascending Order</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="quotePriceDes"
          name="quotePriceDes"
          onChange={handleCheckbox}
        />
        <label htmlFor="quotePriceDes">Descending Order</label>
      </div>
    </div>
  );

  let alphaSortContent = (
    <Fragment>
      <div>
        <input
          type="checkbox"
          id="surnameSort"
          name="surnameSort"
          onChange={handleCheckbox}
        />
        <label htmlFor="surnameSort">surname</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="firstNameSort"
          name="firstNameSort"
          onChange={handleCheckbox}
        />
        <label htmlFor="firstNameSort">first name</label>
      </div>
    </Fragment>
  );

  //useEffect(handleTotal, [setIsTotalClicked, isTotalClicked]);
  return (
    <form>
      <p>Sort by</p>
      <hr></hr>
      <div>
        <input
          type="checkbox"
          id="alphaSort"
          name="alphaSort"
          onChange={handleCheckbox}
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
          type="checkbox"
          id="totalSort"
          name="totalSort"
          onChange={handleCheckbox}
        />
        <label htmlFor="totalSort">
          Total{" "}
          <button type="button" onClick={handleTotal}>
            +
          </button>
        </label>
        {isTotalClicked && totalSortContent}
      </div>
      <div>
        <input
          type="checkbox"
          id="langNumSort"
          name="langNumSort"
          onChange={handleCheckbox}
        />
        <label htmlFor="langNumSort">Greatest number of Languages</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="langNumSort"
          name="langNumSort"
          onChange={handleCheckbox}
        />
        <label htmlFor="langNumSort">Greatest number of Pages</label>
      </div>
      <p>Filter quotes which include:</p>
      <div>
        <input
          type="checkbox"
          id="webFilter"
          name="webFilter"
          onChange={handleCheckbox}
        />
        <label htmlFor="webFilter">A webpage</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="seoFilter"
          name="seoFilter"
          onChange={handleCheckbox}
        />
        <label htmlFor="seoFilter">SEO consultation</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="adsFilter"
          name="adsFilter"
          onChange={handleCheckbox}
        />
        <label htmlFor="adsFilter">Google Ads Campaign</label>
      </div>
    </form>
  );
};

export default FilterPanel;
