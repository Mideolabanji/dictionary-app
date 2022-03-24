import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function MeaningCard(props) {
  return (
    <div className="card bg-dark mb-4">
      <div className="card-body">
        {props.property.meanings.map(function (meaning, index) {
          console.log(meaning);
          return (
            <div key={index}>
              <h3 className="card-title">{meaning.partOfSpeech}</h3>
              {meaning.definitions.map(function (definition, index) {
                return (
                  <div className="card-text mb-2" key={index}>
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
    </div>
  );
}
