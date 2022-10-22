import BarList from "./components/barlist/BarList";
import { CheckBoxGroup } from "./components/checkboxgroup/CheckBoxGroup";
import { Slider } from "./components/slider/Slider";
import { STRENGTHS } from "./constants/enums";

function App() {
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
      <BarList currentStrength={STRENGTHS.TOO_WEAK} />
      <BarList currentStrength={STRENGTHS.WEAK} />
      <BarList currentStrength={STRENGTHS.MEDIUM} />
      <BarList currentStrength={STRENGTHS.STRONG} />
    </div>
  );
}

export default App;
