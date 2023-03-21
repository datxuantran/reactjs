import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <form className="SearchBar" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input type="submit" hidden />
    </form>
  );
};

export default SearchBar;
