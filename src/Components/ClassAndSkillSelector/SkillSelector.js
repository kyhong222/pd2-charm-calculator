import React from "react";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

function SkillSelector(props) {
  const [skill, setSkill] = React.useState("");

  const handleChange = (event) => {
    setSkill(event.target.value);
  };

  const paladinSkills = [
    "Holy Bolt",
    "Blessed Hammer",
    "Fist of the Heavens",
    "Holy Nova",
  ];
  const classArray = [paladinSkills];

  const skillsRendering = (charactor) => {
    const result = [];
    for (let i = 0; i < classArray[charactor].length; i++) {
      result.push(<MenuItem value={i}>{classArray[charactor][i]}</MenuItem>);
    }

    return result;
  };

  return (
    <FormControl sx={{ width: 1 / 2 }}>
      <InputLabel id="skill-selector-label">Skill</InputLabel>
      <Select
        labelId="skill-select-label"
        id="skill-select"
        value={skill}
        label="Skill"
        onChange={handleChange}
      >
        {skillsRendering(0)}
      </Select>
    </FormControl>
  );
}

export default SkillSelector;
