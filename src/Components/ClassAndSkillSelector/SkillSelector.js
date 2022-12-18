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

  const amazonSkills = [
    "Poison Javelin",
    "Power Strike",
    "Lightning Bolt",
    "Charged Strike",
    "Plague Javelin",
    "Lightning Strike",
    "Lightning Fury",
    "Magic Arrow",
    "Fire Arrow",
    "Cold Arrow",
    "Ice Arrow",
    "Exploding Arrow",
    "Immolation Arrow",
    "Freezing Arrow",
  ].sort();
  const assassinSkills = ["To Be Updated"].sort();
  const barbarianSkills = ["To Be Updated"].sort();
  const druidSkills = [
    "Firestorm",
    "Arctic Blast",
    "Molten Boulder",
    "Fissure",
    "Volcano",
    "Hurricane",
  ].sort();
  const necromancerSkills = [
    "Fire Golem",
    "Teeth",
    "Poison Strike",
    "Corpse Explosion",
    "Bone Spear",
    "Poison Nova",
    "Bone Spirit",
  ].sort();
  const paladinSkills = [
    "Holy Bolt",
    "Blessed Hammer",
    "Fist of the Heavens",
    "Holy Nova",
  ].sort();
  const sorceressSkills = [
    "Ice Bolt",
    "Cold Enchant",
    "Frost Nova",
    "Ice Blast",
    "Glacial Spike",
    "Ice Barrage",
    "Blizzard",
    "Frozen Orb",
    "Charged Bolt",
    "Nova",
    "Lightning",
    "Chain Lightning",
    "Fire Bolt",
    "Inferno",
    "Blaze",
    "Fire Wall",
    "Fire Ball",
    "Lesser Hydra",
    "Enchant Fire",
    "Meteor",
    "Combustion",
    "Hydra",
  ].sort();

  const classArray = [
    amazonSkills,
    assassinSkills,
    barbarianSkills,
    druidSkills,
    necromancerSkills,
    paladinSkills,
    sorceressSkills,
  ];

  const skillsRendering = (charactor) => {
    const result = [];
    if (Number(charactor) === -1) {
      return result;
    }
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
        {skillsRendering(props.selected)}
      </Select>
    </FormControl>
  );
}

export default SkillSelector;
