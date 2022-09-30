import { ChangeEvent } from "react";

import classes from "./Slider.module.css";

type SliderProps = {
  onChange: (event: ChangeEvent) => void;
};

export function Slider(props: SliderProps) {
  return (
    <input
      className={classes["progress__input"]}
      type="range"
      min={0}
      max={100}
      onChange={props.onChange}
    />
  );
}
