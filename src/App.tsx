import { useState } from "react";
import StrengthBanner from "./components/banner/strength/Strength";
import BarList from "./components/barlist/BarList";
import Button from "./components/button/Button";
import { CheckBoxGroup } from "./components/checkboxgroup/CheckBoxGroup";
import Copy from "./components/copy/Copy";
import Counter from "./components/counter/Counter";
import Display from "./components/display/Display";
import Input from "./components/input/Input";
import { Slider } from "./components/slider/Slider";
import { STRENGTHS } from "./constants/enums";
import Controls from "./containers/controls/Controls";
import Layout from "./containers/Layout/Layout";
import Screen from "./containers/screen/Screen";
import { createPassword, Flags, getPasswordStrength } from "./utils/utils";

const SCREEN_ID = "___display_input_screen___";

const DefaultFlags: Flags = {
  hasLowerCase: true,
  hasNumbers: true,
  hasUpperCase: true,
  hasSymbols: false,
};
function App() {
  const [count, setCount] = useState(10);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const lowerCheck = document.getElementById(
      "hasLowerCase"
    ) as HTMLInputElement;
    const upperCheck = document.getElementById(
      "hasUpperCase"
    ) as HTMLInputElement;
    const numberCheck = document.getElementById(
      "hasNumbers"
    ) as HTMLInputElement;
    const symbolCheck = document.getElementById(
      "hasSymbols"
    ) as HTMLInputElement;

    if (!lowerCheck || !upperCheck || !numberCheck || !symbolCheck) {
      return;
    }

    const currentFlags: Flags = {
      hasLowerCase: lowerCheck.checked,
      hasNumbers: numberCheck.checked,
      hasSymbols: symbolCheck.checked,
      hasUpperCase: upperCheck.checked,
    };

    const generatedPassword = createPassword(currentFlags, count);
    setPassword(generatedPassword);
  };

  return (
    <Layout>
      <Screen id={SCREEN_ID} value={password} />
      <Controls
        characterLength={count}
        setCharacterLength={setCount}
        currentStrength={getPasswordStrength(count)}
        onChangeFlag={console.log}
        defaultFlags={DefaultFlags}
        onSubmit={generatePassword}
      />
    </Layout>
  );
}

export default App;
