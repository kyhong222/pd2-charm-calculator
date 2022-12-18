import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function ConditionChecker(props) {
  const [baseSkillLevel, setBaseSkillLevel] = React.useState(0);
  const [baseMastery, setBaseMastery] = React.useState(0);
  const [baseSynergies, setSynergiesMastery] = React.useState(0);

  const baseSkillChange = (event) => {
    setBaseSkillLevel(event.target.value);
  };
  const baseMasteryChange = (event) => {
    setBaseMastery(event.target.value);
  };
  const baseSynergiesChange = (event) => {
    setSynergiesMastery(event.target.value);
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="filled-skill-level"
        label="Skill Level"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={baseSkillLevel}
        onChange={baseSkillChange}
      />
      <TextField
        id="filled-elemental-mastery"
        label="Elemental Mastery"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={baseMastery}
        onChange={baseMasteryChange}
      />
      <TextField
        id="filled-synergies"
        label="Synergies"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={baseSynergies}
        onChange={baseSynergiesChange}
      />
    </Box>
  );
}

export default ConditionChecker;
