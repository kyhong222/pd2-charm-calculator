import React from "react";
import CharactorSelector from "./CharactorSelector";
import SkillSelector from "./SkillSelector";
import Box from "@mui/material/Box";

function ClassAndSkillSelector(props) {
  const [selected, setSelected] = React.useState("-1");

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <CharactorSelector
          setCharactorName={props.charactorName}
          setSelected={setSelected}
        ></CharactorSelector>
        <SkillSelector
          selected={selected}
          skillName={props.skillName}
        ></SkillSelector>
      </Box>
    </div>
  );
}

export default ClassAndSkillSelector;
