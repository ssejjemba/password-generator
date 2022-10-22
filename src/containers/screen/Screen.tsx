import React from "react";
import Display from "../../components/display/Display";

import classes from "./Screen.module.css";

type ScreenProps = {
  id: string;
  value: string;
};

export default function Screen(props: ScreenProps) {
  return (
    <div className={classes["container"]}>
      <Display id={props.id} value={props.value} />
    </div>
  );
}
