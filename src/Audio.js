import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export default function Audio(props) {
  if (props.property) {
    return (
      <a
        href={props.property}
        target="_blank"
        rel="noreferrer"
        className="audio"
      >
        <FontAwesomeIcon
          icon={faVolumeHigh}
          className="volume-icon"
          vertical-align="0em"
        />
      </a>
    );
  } else {
    return null;
  }
}
