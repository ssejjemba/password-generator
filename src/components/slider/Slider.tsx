import { ChangeEvent, useRef } from "react";
import { useChromeSlider } from "../../hooks/useChromeSlider";

import classes from "./Slider.module.css";

type SliderProps = {
  onChange: (event: ChangeEvent) => void;
};

export function Slider(props: SliderProps) {
  const ref = useRef<HTMLInputElement>(null);
  useChromeSlider(ref);
  return (
    <input
      className={classes["progress__input"]}
      ref={ref}
      type="range"
      min={0}
      max={10}
      step={1}
      defaultValue={5}
      onChange={props.onChange}
    />
  );
}
