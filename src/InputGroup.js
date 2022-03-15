import React from "react";
import Body from "./Body";

export default function InputGroup() {
  return (
    <div className="InputGroup">
      <form>
        <input
          type="search"
          placeholder="Search for a word..."
          className="mb-5"
        />
      </form>
      <Body />
    </div>
  );
}
