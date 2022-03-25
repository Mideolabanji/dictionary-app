import React from "react";
import MeaningCard from "./MeaningCard";
import Audio from "./Audio";

export default function Body(props) {
  if (props.property) {
    return (
      <div className="Body">
        <h1 className="align-left">{props.property.word}</h1>
        <div className="row">
          <p className="mb-4 col-2">{props.property.phonetic}</p>
          <div className="col-9">
            <Audio property={props.property.phonetics[0].audio} />
          </div>
        </div>
        <MeaningCard property={props.property} />
      </div>
    );
  } else {
    return null;
  }
}
