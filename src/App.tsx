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
import { getPasswordStrength } from "./utils/utils";

const SCREEN_ID = "___display_input_screen___";

function App() {
  const [count, setCount] = useState(10);
  const [password, setPassword] = useState("");

  return (
    <Layout>
      <Screen id={SCREEN_ID} value={password} />
      <Controls
        characterLength={count}
        setCharacterLength={setCount}
        currentStrength={getPasswordStrength(count)}
      />
    </Layout>
  );
}

export default App;
