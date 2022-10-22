import { useState } from "react";
import StrengthBanner from "./components/banner/strength/Strength";
import BarList from "./components/barlist/BarList";
import Button from "./components/button/Button";
import { CheckBoxGroup } from "./components/checkboxgroup/CheckBoxGroup";
import Counter from "./components/counter/Counter";
import Input from "./components/input/Input";
import { Slider } from "./components/slider/Slider";
import { STRENGTHS } from "./constants/enums";

function App() {
  const [count, setCount] = useState(10);
  return (
    <div>
      <Slider onChange={() => {}} />

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
      <Counter count={count} setCount={setCount} defaultCount={10} />
      <Input id="display_value" value="" />
    </div>
  );
}

export default App;
