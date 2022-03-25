import React from "react";
import MeaningCard from "./MeaningCard";
import Audio from "./Audio";

export default function Body(props) {
  if (props.property) {
    return (
      <div className="Body">
        <h1 className="align-left">{props.property.word}</h1>
        <p className="mb-4">
          {props.property.phonetic}{" "}
          <Audio property={props.property.phonetics[0].audio} />
        </p>
        <MeaningCard property={props.property} />
      </div>
    );
  } else {
    return null;
  }
}
