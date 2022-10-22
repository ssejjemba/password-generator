import React from "react";

// This application only has one text input that
//  does not allow typing text in it

import classes from "./Input.module.css";

type InputProps = {
  value?: string;
  id: string;
};

export default function Input(props: InputProps) {
  return (
    <input
      className={`${classes["input"]} main_heading`}
      disabled
      placeholder="P4$5W0rD!"
      value={props.value}
      id={props.id}
    />
  );
}
