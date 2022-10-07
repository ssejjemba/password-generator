import { Checkbox, CheckboxProps } from "../checkbox/Checkbox";
import classes from "./CheckBoxGroup.module.css";

type CheckBoxGroupProps = {
  data: Array<{ id: string; labelText: string }>;
  onChange: (id: string) => void;
};

export function CheckBoxGroup(props: CheckBoxGroupProps) {
  return (
    <ul className={classes["list"]}>
      {props.data.map((item) => (
        <Checkbox
          onChange={() => props.onChange(item.id)}
          {...item}
          key={item.id}
        />
      ))}
    </ul>
  );
}
