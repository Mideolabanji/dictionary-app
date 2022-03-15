import React from "react";

export default function MeaningCard() {
  return (
    <div class="card bg-dark">
      <div class="card-body">
        <h3 class="card-title">verb</h3>
        <p class="card-text">
          regard with disgust and hatred.{" "}
          <div>"he abhorred sexism in every form"</div>
        </p>
        <p>
          Similar: <a href="/">detest</a>, <a href="/">hate</a>,{" "}
          <a href="">loath</a>, <a href="">despise</a>, <a href="">abominate</a>
          , <a href="">execrate</a>,{" "}
          <a className="text-muted">regard with disgust</a>,{" "}
          <a className="text-muted">find intolerable</a>, <a href="">dislike</a>
          , <a href="">disdain</a>, <a href="">disrelish</a>
          <div>
            Opposite: <a href="">love</a>, <a href="">admire</a>,{" "}
            <a className="text-muted">delight in</a>
          </div>
        </p>
      </div>
    </div>
  );
}
