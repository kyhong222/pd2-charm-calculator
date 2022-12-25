import React from "react";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

function CharactorSelector(props) {
  const [charactor, setCharactor] = React.useState("");

  const handleChange = (event) => {
    setCharactor(event.target.value);
    props.setSelected(event.target.value);
    props.setCharactorName(classArray[event.target.value]);
  };
  const classArray = [
    "Amazon",
    "Assassin",
    "Barbarian",
    "Druid",
    "Necromancer",
    "Paladin",
    "Sorceress",
  ];
  const charactorRendering = () => {
    const result = [];
    for (let i = 0; i < classArray.length; i++) {
      result.push(<MenuItem value={i}>{classArray[i]}</MenuItem>);
    }

    return result;
  };

  return (
    <FormControl sx={{ width: 1 / 2 }}>
      <InputLabel id="charactor-select-label">Class</InputLabel>
      <Select
        labelId="charactor-select-label"
        id="charactor-select"
        value={charactor}
        label="Class"
        onChange={handleChange}
      >
        {charactorRendering()}
      </Select>
    </FormControl>
  );
}

export default CharactorSelector;
