import React from "react";
export default function PhotosCard(props) {
  if (props.property && props.property.length >= 1) {
    return (
      <div className="card bg-dark mb-4 img-card">
        <div className="row img-row">
          {props.property.map(function (photo, index) {
            return (
              <div className="col-4 image" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid img-radius"
                    alt={photo.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
