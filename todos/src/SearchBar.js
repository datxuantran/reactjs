import React from "react";

const SearchBar = ({ needle, setNeedle }) => {
  return (
    <form className="SearchBar" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={needle}
        onChange={(e) => setNeedle(e.target.value)}
      />
      <input type="submit" hidden />
    </form>
  );
};

export default SearchBar;
