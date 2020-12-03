import React from "react";
import {Link} from 'react-router-dom';

const Search = () => {
  return (
    <form className="search-form">
      <input className="search-bar" type="text" />
      <button  type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
