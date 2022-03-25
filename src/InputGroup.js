import React, { useState } from "react";
import axios from "axios";
import Body from "./Body";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function InputGroup() {
  let [keyword, setKeyword] = useState(null);
  let [data, setData] = useState(null);

  function handleResponse(response) {
    setData(response.data[0]);
  }

  function handleSearch(event) {
    event.preventDefault();
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
          className="mb-5 search"
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} size="1x" />
      </form>
      <Body property={data} />
    </div>
  );
}
