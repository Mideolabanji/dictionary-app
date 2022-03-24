import React from "react";

export default function Synonyms(props) {
  console.log(props.property);
  if (props.property.length >= 1) {
    return (
      <div className="Synonyms">
        Similar:{" "}
        {props.property.map(function (synonym, index) {
          return <span key={index}>{synonym} </span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
