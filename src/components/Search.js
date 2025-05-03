import React from "react";

function Search({ onSearch, value }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={value} onChange={onSearch} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
