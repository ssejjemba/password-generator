import classes from "./Checkbox.module.css";

export type CheckboxProps = {
  id: string;
  labelText: string;
  onChange?: () => void;
  checked?: boolean;
};

export function Checkbox(props: CheckboxProps) {
  return (
    <li className={classes["container"]}>
      <input
        type="checkbox"
        id={props.id}
        defaultChecked={props.checked}
        onChange={props.onChange}
        className={classes["input"]}
      />
      <label className={classes["label"]} htmlFor={props.id}>
        {props.labelText}
      </label>
    </li>
  );
}
