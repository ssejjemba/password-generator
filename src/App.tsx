import { CheckBoxGroup } from "./components/checkboxgroup/CheckBoxGroup";
import { Slider } from "./components/slider/Slider";

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
    </div>
  );
}

export default App;
