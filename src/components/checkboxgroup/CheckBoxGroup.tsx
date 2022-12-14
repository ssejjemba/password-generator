import { FlagName, Flags } from "../../utils/utils";
import { Checkbox, CheckboxProps } from "../checkbox/Checkbox";
import classes from "./CheckBoxGroup.module.css";

type CheckBoxGroupProps = {
  data: Array<{ id: FlagName; labelText: string }>;
  onChange: (id: FlagName) => void;
  defaultValues: Flags;
};

export function CheckBoxGroup(props: CheckBoxGroupProps) {
  return (
    <ul className={classes["list"]}>
      {props.data.map((item) => (
        <Checkbox
          onChange={() => props.onChange(item.id)}
          {...item}
          key={item.id}
          checked={props.defaultValues[item.id]}
        />
      ))}
    </ul>
  );
}
