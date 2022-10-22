import React from "react";
import Copy from "../copy/Copy";
import Input from "../input/Input";

import classes from "./Display.module.css";

type DisplayProps = {
  id: string;
  value: string;
};

export default function Display(props: DisplayProps) {
  return (
    <div className={classes["container"]}>
      <Input id={props.id} value={props.value} />
      <Copy id={props.id} />
    </div>
  );
}
