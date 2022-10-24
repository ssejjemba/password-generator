import React from "react";
import { Slider } from "../slider/Slider";

import classes from "./Counter.module.css";

type CouterProps = {
  count: number;
  setCount: (val: number) => void;
  defaultCount: number;
  id: string;
};

export default function Counter(props: CouterProps) {
  return (
    <div className={classes["container"]}>
      <div className={classes["display"]}>
        <label htmlFor={props.id} className={classes["key"]}>
          Character Length
        </label>
        <span className={`${classes["value"]} main_heading`}>
          {props.count}
        </span>
      </div>
      <Slider
        id={props.id}
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
