import React from "react";

export default function Audio(props) {
  if (props.property) {
    return (
      <a href={props.property} target="_blank">
        Listen
      </a>
    );
  } else {
    return null;
  }
}
