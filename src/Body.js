import React from "react";
import ImageCard from "./ImageCard";
import MeaningCard from "./MeaningCard";

export default function Body() {
  return (
    <div className="Body">
      <h1 className="align-left">Abhor</h1>
      <p className="mb-4">/əbˈhɔː/</p>
      <MeaningCard />
      <ImageCard />
    </div>
  );
}
