import React from "react";

export default function Antonyms(props) {
  if (props.property.length >= 1) {
    return (
      <div>
        Opposite:{" "}
        {props.property.map(function (antonym, index) {
          return <span key={index}>{antonym} </span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
