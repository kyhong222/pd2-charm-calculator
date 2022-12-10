import React from "react";
import CharactorSelector from "./CharactorSelector";
import SkillSelector from "./SkillSelector";

function ClassAndSkillSelector(props) {
  return (
    <div>
      <CharactorSelector></CharactorSelector>
      <SkillSelector></SkillSelector>
    </div>
  );
}

export default ClassAndSkillSelector;
