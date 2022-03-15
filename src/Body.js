import React from "react";

export default function Body() {
  return (
    <div>
      <form>
        <input
          type="search"
          placeholder="Search for a word..."
          className="mb-5"
        />
      </form>
      <h1 className="align-left">Abhorrent</h1>
      <p className="mb-4">/əbˈhɒr(ə)nt/</p>
      <div class="card bg-dark">
        <div class="card-body">
          <h3 class="card-title">adjective</h3>
          <p class="card-text">
            inspiring disgust and loathing; repugnant. "racism was abhorrent to
            us all"
          </p>
          <p>
            Similar: <a href="/">detestable</a> <a href="/">detested</a>{" "}
            <a href="">hateful</a> <a href="">hated</a> <a href="">loathsome</a>{" "}
            <a href="">loathed</a> <a href="">despicable</a>{" "}
            <a href="">despised</a> <a href="">abominable</a>{" "}
            <a href="">abominated</a> <a href="">execrable</a>{" "}
            <a href="">execrated</a>
            <div>
              Opposite: <a href="">admirable</a> <a href="">loved</a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}
