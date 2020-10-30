import React from "react";

const FilterBar = ({ search, searchHandle, onSearchSubmit }) => {
  return (
    <form className="toolbar-wrap" onSubmit={onSearchSubmit}>
      <div className="field">
        <input
          type="text"
          className="input"
          placeholder="Search by Pokemon Name"
          // value={search}
          onChange={searchHandle}
        />
      </div>
    </form>
  );
};

export default FilterBar;
