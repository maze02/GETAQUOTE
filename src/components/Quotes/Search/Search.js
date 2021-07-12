import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Search.module.css";

const Search = ({ handleSearch, searchRef }) => {
  return (
    <div className={classes.searchcontainer}>
      <label htmlFor="search" className={classes.searchicon}>
        <FontAwesomeIcon icon="search" />
      </label>
      <input
        ref={searchRef}
        className={classes.searchinput}
        type="text"
        id="search"
        placeholder="type client's surname"
        onKeyUp={handleSearch}
      ></input>
    </div>
  );
};

export default Search;
