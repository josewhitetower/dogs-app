import React from "react";

export default function Dog(props) {
  return <div>I am a dog: {props.match.params.name}</div>;
}
