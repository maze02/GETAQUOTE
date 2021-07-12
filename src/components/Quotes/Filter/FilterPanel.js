import { Fragment } from "react";
import classes from "./FilterPanel.module.css";
import Card from "../../UI/Card";

const FilterPanel = ({ handleFilter }) => {
  return (
    <Fragment>
      <button
        className={`btn ${classes.spacing}`}
        id="reset"
        type="button"
        name="filter"
        onClick={handleFilter}
      >
        Reset Filter
      </button>
      <Card>
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
            <label htmlFor="alphaSort">Alphabetical order</label>
          </div>
          <div>
            <input
              type="radio"
              id="totalSort"
              name="filter"
              onChange={handleFilter}
            />
            <label htmlFor="totalSort">Total</label>
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
              id="pageNumSort"
              name="filter"
              onChange={handleFilter}
            />
            <label htmlFor="pageNumSort">Greatest number of Pages</label>
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
      </Card>
    </Fragment>
  );
};

export default FilterPanel;
