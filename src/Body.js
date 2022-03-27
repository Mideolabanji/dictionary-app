import React from "react";
import MeaningCard from "./MeaningCard";
import Audio from "./Audio";

export default function Body(props) {
  if (props.property) {
    return (
      <div className="Body">
        <h1 className="word">{props.property.word}</h1>
        <div className="mb-4">
          {props.property.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                {phonetic.text} <Audio property={phonetic.audio} />
              </div>
            );
          })}{" "}
        </div>
        <MeaningCard property={props.property} />
      </div>
    );
  } else {
    return null;
  }
}
