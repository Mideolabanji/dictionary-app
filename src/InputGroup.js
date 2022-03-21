import React, { useState } from "react";
import axios from "axios";
import Body from "./Body";

export default function InputGroup() {
  let [keyword, setKeyword] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
  }

  function handleSearch(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}...`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateKeywordDetails(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="InputGroup">
      <form onSubmit={handleSearch}>
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
