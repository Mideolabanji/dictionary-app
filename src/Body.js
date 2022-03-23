import React from "react";
import ImageCard from "./ImageCard";
import MeaningCard from "./MeaningCard";

export default function Body(props) {
  if (props.property) {
    return (
      <div className="Body">
        <h1 className="align-left">{props.property.word}</h1>
        <p className="mb-4">{props.property.phonetic}</p>
        <MeaningCard />
        <ImageCard />
      </div>
    );
  } else {
    return null;
  }
}
