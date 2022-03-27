import React, { useState } from "react";
import axios from "axios";
import Body from "./Body";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import PhotosCard from "./PhotosCard";

export default function InputGroup() {
  let [keyword, setKeyword] = useState(null);
  let [data, setData] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setData(response.data[0]);
  }

  function handlePhotosResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleSearch(event) {
    event.preventDefault();
    let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(dictionaryApiUrl).then(handleDictionaryResponse);

    let photosApiKey = `563492ad6f917000010000010a8428d27f1b43e6bc66cfe662ea13df`;
    let photosApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${photosApiKey}` };
    axios.get(photosApiUrl, { headers: headers }).then(handlePhotosResponse);
  }

  function updateKeywordDetails(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="InputGroup">
      <form onSubmit={handleSearch}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          type="submit"
          className="icon"
        />
        <input
          onChange={updateKeywordDetails}
          type="search"
          placeholder="Search for a word..."
          className="mb-5 search"
        />
      </form>
      <Body property={data} />
      <PhotosCard property={photos} />
    </div>
  );
}
