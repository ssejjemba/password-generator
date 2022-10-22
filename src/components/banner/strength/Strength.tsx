import { STRENGTHS } from "../../../constants/enums";
import BarList from "../../barlist/BarList";
import classes from "./Strength.module.css";

const STRENGTH_NAME = {
  [STRENGTHS.TOO_WEAK]: "Too weak",
  [STRENGTHS.WEAK]: "Weak",
  [STRENGTHS.MEDIUM]: "Medium",
  [STRENGTHS.STRONG]: "Strong",
};

type StrengthProps = {
  currentStrength: STRENGTHS;
};

export default function StrengthBanner(props: StrengthProps) {
  return (
    <div className={classes["container"]}>
      <p className={classes["key"]}>Strength</p>
      <div className={classes["value"]}>
        <span className={`${classes["title"]} secondary_heading`}>
          {STRENGTH_NAME[props.currentStrength]}
        </span>
        <BarList currentStrength={props.currentStrength} />
      </div>
    </div>
  );
}
