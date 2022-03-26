import React from "react";

export default function Antonyms(props) {
  if (props.property.length >= 1) {
    return (
      <div>
        <strong>Opposite:</strong>{" "}
        <a>
          {props.property.map(function (antonym, index) {
            return (
              <span key={index} className="thesaurus">
                {antonym}{" "}
              </span>
            );
          })}
        </a>
      </div>
    );
  } else {
    return null;
  }
}
