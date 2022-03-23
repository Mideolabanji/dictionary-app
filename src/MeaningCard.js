import React from "react";

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
            </div>
          );
        })}
        <div>
          Similar: <a href="https://olamide-olabanji.netlify.app/">detest</a>,{" "}
          <a href="https://olamide-olabanji.netlify.app/">hate</a>,{" "}
          <a href="https://olamide-olabanji.netlify.app/">loath</a>,{" "}
          <a href="https://olamide-olabanji.netlify.app/">despise</a>,{" "}
          <a href="https://olamide-olabanji.netlify.app/">abominate</a>,{" "}
          <a href="https://olamide-olabanji.netlify.app/">execrate</a>,{" "}
          <a
            className="text-muted"
            href="https://olamide-olabanji.netlify.app/"
          >
            regard with disgust
          </a>
          ,{" "}
          <a
            href="https://olamide-olabanji.netlify.app/"
            className="text-muted"
          >
            find intolerable
          </a>
          , <a href="https://olamide-olabanji.netlify.app/">dislike</a>,{" "}
          <a href="https://olamide-olabanji.netlify.app/">disdain</a>,{" "}
          <a href="https://olamide-olabanji.netlify.app/">disrelish</a>
          <div>
            Opposite: <a href="https://olamide-olabanji.netlify.app/">love</a>,{" "}
            <a href="https://olamide-olabanji.netlify.app/">admire</a>,{" "}
            <a
              className="text-muted"
              href="https://olamide-olabanji.netlify.app/"
            >
              delight in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
