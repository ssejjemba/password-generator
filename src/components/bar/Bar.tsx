import React from "react";
import classes from "./Bar.module.css";

type BarProps = {
  isFull: boolean;
};

export default function Bar(props: BarProps) {
  const styleClass = props.isFull ? classes["full"] : classes["empty"];
  return <span className={`${classes["bar"]} ${styleClass}`} />;
}
