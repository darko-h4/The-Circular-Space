import React from "react";
import {Link} from 'react-router-dom';

const Search = () => {
  return (
    <form className="search-form">
      <input className="search-bar" type="text" />
      <button  type="submit">
        Search
      </button>
      <Link to='/category'><button className="white">Choose Category</button></Link>
    </form>
  );
};

export default Search;
