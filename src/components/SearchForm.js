import React, { useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");

  const cocktailUpdate = () => {
    setSearchTerm(searchValue.current.value);
    console.log(searchValue.current.value);
  };

  // searchValue is a ref , hence it has an object with current property and it the stores the value of the refernced element
  // current property stores the entire html element we have refeerneced.
  React.useEffect(() => {
    searchValue.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={cocktailUpdate}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
