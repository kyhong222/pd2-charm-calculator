import ConditionChecker from "./Components/ConditionChecker";
import CalculatedTable from "./Components/CalculatedTable";
import ClassAndSkillSelector from "./Components/ClassAndSkillSelector/ClassAndSkillSelector";
import React from "react";

function App() {
  const [calSkillName, setCalSkillName] = React.useState("");
  const [calSkillLevel, setCalSkillLevel] = React.useState(0);
  const [calSynergies, setCalSynergies] = React.useState(0);
  const [calMasteries, setCalMasteries] = React.useState(0);
  // const [calMinDmg, setCalMinDmg] = React.useState(0);
  // const [calMaxDmg, setCalMaxDmg] = React.useState(0);

  return (
    <div className="App">
      <ClassAndSkillSelector skillName={setCalSkillName} />
      <ConditionChecker
        skillName={calSkillName}
        skillLevel={setCalSkillLevel}
        synergies={setCalSynergies}
        masteries={setCalMasteries}
      />
      <CalculatedTable
        skillName={calSkillName}
        skillLevel={calSkillLevel}
        synergies={calSynergies}
        masteries={calMasteries}
        // minDmg={calMinDmg}
        // maxDmg={calMaxDmg}
      />
    </div>
  );
}

export default App;
