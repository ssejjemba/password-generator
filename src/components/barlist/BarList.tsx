import React from "react";
import { STRENGTHS } from "../../constants/enums";
import Bar from "../bar/Bar";

import classes from "./BarList.module.css";

type BarListProps = {
  currentStrength: STRENGTHS;
};

const StrengthsColorMapping = {
  [STRENGTHS.TOO_WEAK]: classes["too_weak"],
  [STRENGTHS.WEAK]: classes["weak"],
  [STRENGTHS.MEDIUM]: classes["medium"],
  [STRENGTHS.STRONG]: classes["strong"],
};

export default function BarList(props: BarListProps) {
  const listClass = StrengthsColorMapping[props.currentStrength];
  return (
    <div className={`${classes["bar_list"]} ${listClass}`}>
      {[...Array(4).keys()].map((value) => {
        const isFull = value < props.currentStrength;
        return <Bar isFull={isFull} key={value.toString()} />;
      })}
    </div>
  );
}
