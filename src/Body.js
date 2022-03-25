import React from "react";
import ImageCard from "./ImageCard";
import MeaningCard from "./MeaningCard";

export default function Body(props) {
  if (props.property) {
    return (
      <div className="Body">
        <h1 className="align-left">{props.property.word}</h1>
        <div className="row">
          <p className="mb-4 col-2">{props.property.phonetic}</p>
          <div className="col-10 audio">
            <a href={props.property.phonetics[0].audio} target="_blank">
              Listen
            </a>
          </div>
        </div>
        <MeaningCard property={props.property} />
        <ImageCard />
      </div>
    );
  } else {
    return null;
  }
}
