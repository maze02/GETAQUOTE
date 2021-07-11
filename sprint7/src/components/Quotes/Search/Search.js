import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = ({ handleSearch }) => {
  return (
    <div>
      <label htmlFor="search">
        <FontAwesomeIcon icon="search" />
      </label>
      <input
        type="text"
        id="search"
        placeholder="type client's surname"
        onKeyUp={handleSearch}
      ></input>
    </div>
  );
};

export default Search;
