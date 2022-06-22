import React, { useState } from "react";
import Scroll from "./Scroll";
import SearchList from "./SearchList";
import { Button } from "react-bootstrap";
function Search({ details }) {
  const [searchField1, setSearchField1] = useState("");
  const [searchField2, setSearchField2] = useState("");

  const filteredPersons = details.filter((person) => {
    return (
      person.name.toLowerCase().includes(searchField1.toLowerCase())
    );
  });
  const filteredMails = details.filter((person) => {
    return (
      person.email.toLowerCase().includes(searchField2.toLowerCase())
    );
  });

  const handleChange1 = (e) => {
    setSearchField1(e.target.value);
  };
  const handleChange2 = (e) => {
    setSearchField2(e.target.value);
  };

  function searchList() {
    return (
      <Scroll>
        <SearchList filteredPersons={filteredPersons} />
      </Scroll>
    );
  }

  return (
    <section>
      <div className="row">
        <div className="col">
          <div>
          <h5>Search for</h5>
            <input
              name="item_title"
              id="item_title"
              className="form-control"
              type="search"
              placeholder="Search People"
              onChange={handleChange1}
            />
          </div>
        </div>
        <div className="col">
          <h5>Where</h5>
          <input
            type="search"
            name="item_title"
            id="item_title"
            className="form-control"
            placeholder="City State or Zip Code"
            onChange={handleChange2}
          />
        </div>
        <div className="col">
          <h5>Department</h5>
          <input
            type="search"
            name="item_title"
            id="item_title"
            className="form-control"
            placeholder="City State or Zip Code"
            onChange={handleChange2}
          />
        </div>
        <div className="col mt-4">
          <Button variant="secondary">Search Jobs</Button>
        </div>
      </div>
      {searchList()}
    </section>
  );
}

export default Search;
