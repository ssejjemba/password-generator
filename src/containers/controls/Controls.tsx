import React from "react";
import StrengthBanner from "../../components/banner/strength/Strength";
import Button from "../../components/button/Button";
import { CheckBoxGroup } from "../../components/checkboxgroup/CheckBoxGroup";
import Counter from "../../components/counter/Counter";
import { STRENGTHS } from "../../constants/enums";
import { Flags } from "../../utils/utils";

import classes from "./Controls.module.css";

type ControlProps = {
  characterLength: number;
  setCharacterLength: (val: number) => void;
  currentStrength: STRENGTHS;
  onChangeFlag: (id: string) => void;
  defaultFlags: Flags;
  onSubmit: () => void;
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
          { id: "hasUpperCase", labelText: "Include Uppercase Letters" },
          { id: "hasLowerCase", labelText: "Include Lowercase Letters" },
          { id: "hasNumbers", labelText: "Include Numbers" },
          { id: "hasSymbols", labelText: "Include Symbols" },
        ]}
        onChange={props.onChangeFlag}
        defaultValues={props.defaultFlags}
      />
      <StrengthBanner currentStrength={props.currentStrength} />
      <Button onClick={props.onSubmit} />
    </div>
  );
}
