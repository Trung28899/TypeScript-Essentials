import React from "react";
import { InputProps } from "../Types";

function Input(props: InputProps) {
  return (
    <input type="text" value={props.value} onChange={props.handleChange} />
  );
}

export default Input;
