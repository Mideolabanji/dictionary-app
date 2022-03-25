import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function MeaningCard(props) {
  return (
    <div>
      {props.property.meanings.map(function (meaning, index) {
        return (
          <div className="card-body bg-dark mb-4" key={index}>
            <h3 className="card-title partOfSpeec">{meaning.partOfSpeech}</h3>
            {meaning.definitions.map(function (definition, index) {
              return (
                <div className="card-text mb-3" key={index}>
                  {definition.definition}
                  <div>
                    <em>{definition.example}</em>
                  </div>
                </div>
              );
            })}
            <Synonyms property={meaning.synonyms} />
            <Antonyms property={meaning.antonyms} />
          </div>
        );
      })}
    </div>
  );
}
