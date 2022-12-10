import ConditionChecker from "./Components/ConditionChecker";
import CalculatedTable from "./Components/CalculatedTable";
import ClassAndSkillSelector from "./Components/ClassAndSkillSelector/ClassAndSkillSelector";

function App() {
  return (
    <div className="App">
      <ClassAndSkillSelector />
      <ConditionChecker />
      <CalculatedTable />
    </div>
  );
}

export default App;
