import React from "react";

export default function Synonyms(props) {
  if (props.property.length >= 1) {
    return (
      <div className="Synonyms mb-2">
        <strong>Similar:</strong>{" "}
        {props.property.map(function (synonym, index) {
          return <span key={index}>{synonym} </span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
