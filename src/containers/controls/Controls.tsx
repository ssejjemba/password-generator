import React from "react";
import StrengthBanner from "../../components/banner/strength/Strength";
import Button from "../../components/button/Button";
import { CheckBoxGroup } from "../../components/checkboxgroup/CheckBoxGroup";
import Counter from "../../components/counter/Counter";
import { STRENGTHS } from "../../constants/enums";

import classes from "./Controls.module.css";

type ControlProps = {
  characterLength: number;
  setCharacterLength: (val: number) => void;
  currentStrength: STRENGTHS;
};

export default function Controls(props: ControlProps) {
  return (
    <div className={classes["container"]}>
      <Counter
        count={props.characterLength}
        setCount={props.setCharacterLength}
        defaultCount={10}
      />
      <CheckBoxGroup
        data={[
          { id: "01", labelText: "Include Uppercase Letters" },
          { id: "02", labelText: "Include Lowercase Letters" },
          { id: "03", labelText: "Include Numbers" },
        ]}
        onChange={() => {}}
      />
      <StrengthBanner currentStrength={STRENGTHS.MEDIUM} />
      <Button />
    </div>
  );
}
