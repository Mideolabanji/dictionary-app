import React, { useState } from "react";
import Body from "./Body";

export default function InputGroup() {
  let [keyword, setKeyword] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function updateKeywordDetails(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="InputGroup">
      <form onSubmit={handleSubmit}>
        <input
          onChange={updateKeywordDetails}
          type="search"
          placeholder="Search for a word..."
          className="mb-5"
        />
      </form>
      <Body />
    </div>
  );
}
