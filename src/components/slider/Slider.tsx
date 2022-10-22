import { ChangeEvent, useRef } from "react";
import { useChromeSlider } from "../../hooks/useChromeSlider";

import classes from "./Slider.module.css";

type SliderProps = {
  onChange: (event: ChangeEvent) => void;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
};

export function Slider(props: SliderProps) {
  const ref = useRef<HTMLInputElement>(null);
  useChromeSlider(ref);
  return (
    <input
      className={classes["progress__input"]}
      ref={ref}
      type="range"
      min={props.min ? props.min : 0}
      max={props.max || 10}
      step={props.step || 1}
      defaultValue={props.defaultValue || 5}
      onChange={props.onChange}
    />
  );
}
