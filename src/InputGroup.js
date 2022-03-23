import React, { useState } from "react";
import axios from "axios";
import Body from "./Body";

export default function InputGroup() {
  let [keyword, setKeyword] = useState(null);
  let [data, setData] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0].meanings[0].partOfSpeech);
    console.log(response.data[0].phonetic);
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
      </form>
      <Body property={data} />
    </div>
  );
}
