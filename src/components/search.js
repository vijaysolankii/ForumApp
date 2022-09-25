import React from "react";

const Search = ({handleSearch, searchValue, OnInputChange }) => {
  return (
    <form onSubmit={handleSearch} className="form-inline my-2 my-lg-0 d-flex ms-auto">
    <input
      className="form-control mr-sm-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
      value={searchValue}
      onChange={OnInputChange}
    />
    <button
      type="submit"
      className="btn btn-warning my-2"
    >
      Search
    </button>
  </form>
  );
};

export default Search;
