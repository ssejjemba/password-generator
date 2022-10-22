import React from "react";
import { Slider } from "../slider/Slider";

import classes from "./Counter.module.css";

type CouterProps = {
  count: number;
  setCount: (val: number) => void;
  defaultCount: number;
};

export default function Counter(props: CouterProps) {
  return (
    <div className={classes["container"]}>
      <div className={classes["display"]}>
        <span className={classes["key"]}>Character Length</span>
        <span className={`${classes["value"]} main_heading`}>
          {props.count}
        </span>
      </div>
      <Slider
        min={0}
        max={20}
        step={1}
        defaultValue={props.defaultCount}
        onChange={(e) => {
          const target = e.target as HTMLInputElement;
          props.setCount(+target.value);
        }}
      />
    </div>
  );
}
