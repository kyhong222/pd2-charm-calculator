import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import skillDatas from "../datas/skillDatas";

function CalculatedTable(props) {
  const createData = (name, values) => {
    return (
      <TableRow>
        <TableCell>{name}</TableCell>
        <TableCell>{values[0]}</TableCell>
        <TableCell>{values[1]}</TableCell>
        <TableCell>{values[2]}</TableCell>
        <TableCell>{values[3]}</TableCell>
        <TableCell>{values[4]}</TableCell>
        <TableCell>{values[5]}</TableCell>
        <TableCell>{values[6]}</TableCell>
        <TableCell>{values[7]}</TableCell>
        <TableCell>{values[8]}</TableCell>
      </TableRow>
    );
  };
  const createCalculatedData = (name, values1, values2) => {
    const minArray = [];
    const maxArray = [];
    for (let i = 0; i < 9; i++) {
      const min = Number(values1[i]);
      const max = Number(values2[i]);
      const mastery = Number(props.masteries) + 8 * (8 - i);
      const synergies = Number(props.synergies);

      minArray.push(Number(calculateDmg(min, synergies, mastery)));
      maxArray.push(Number(calculateDmg(max, synergies, mastery)));
    }

    return (
      <TableRow>
        <TableCell>{name}</TableCell>
        <TableCell>{`${minArray[0]}-${maxArray[0]}`}</TableCell>
        <TableCell>{`${minArray[1]}-${maxArray[1]}`}</TableCell>
        <TableCell>{`${minArray[2]}-${maxArray[2]}`}</TableCell>
        <TableCell>{`${minArray[3]}-${maxArray[3]}`}</TableCell>
        <TableCell>{`${minArray[4]}-${maxArray[4]}`}</TableCell>
        <TableCell>{`${minArray[5]}-${maxArray[5]}`}</TableCell>
        <TableCell>{`${minArray[6]}-${maxArray[6]}`}</TableCell>
        <TableCell>{`${minArray[7]}-${maxArray[7]}`}</TableCell>
        <TableCell>{`${minArray[8]}-${maxArray[8]}`}</TableCell>
      </TableRow>
    );
  };
  const createAverageData = (name, values1, values2) => {
    const minArray = [];
    const maxArray = [];
    for (let i = 0; i < 9; i++) {
      const min = Number(values1[i]);
      const max = Number(values2[i]);
      const mastery = Number(props.masteries) + 8 * (8 - i);
      const synergies = Number(props.synergies);

      minArray.push(Number(calculateDmg(min, synergies, mastery)));
      maxArray.push(Number(calculateDmg(max, synergies, mastery)));
    }

    return (
      <TableRow>
        <TableCell>{name}</TableCell>
        <TableCell>{`${((minArray[0] + maxArray[0]) / 2).toFixed(
          1
        )}`}</TableCell>
        <TableCell>{`${((minArray[1] + maxArray[1]) / 2).toFixed(
          1
        )}`}</TableCell>
        <TableCell>{`${((minArray[2] + maxArray[2]) / 2).toFixed(
          1
        )}`}</TableCell>
        <TableCell>{`${((minArray[3] + maxArray[3]) / 2).toFixed(
          1
        )}`}</TableCell>
        <TableCell>{`${((minArray[4] + maxArray[4]) / 2).toFixed(
          1
        )}`}</TableCell>
        <TableCell>{`${((minArray[5] + maxArray[5]) / 2).toFixed(
          1
        )}`}</TableCell>
        <TableCell>{`${((minArray[6] + maxArray[6]) / 2).toFixed(
          1
        )}`}</TableCell>
        <TableCell>{`${((minArray[7] + maxArray[7]) / 2).toFixed(
          1
        )}`}</TableCell>
        <TableCell>{`${((minArray[8] + maxArray[8]) / 2).toFixed(
          1
        )}`}</TableCell>
      </TableRow>
    );
  };

  const calculateDmg = (dmg, synergies, mastery) => {
    return Number(
      (dmg * (1 + synergies / 100) * (1 + mastery / 100)).toFixed(1)
    );
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const SkillLevelRow = () => {
    let valueArray = [];
    if (props.skillLevel <= 0) {
      valueArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    } else {
      for (let i = 0; i < 9; i++) {
        valueArray.push(`${Number(props.skillLevel)} + (${i})`);
      }
    }
    return createData("skill levels(+skiller)", valueArray);
  };

  const MasteryRow = () => {
    const valueArray = [];
    for (let i = 0; i < 9; i++) {
      valueArray.push(`${Number(props.masteries)}% + (${(8 - i) * 8}%)`);
    }

    return createData("elemental mastery(+ 8% large charm)", valueArray);
  };
  const MinDmgRow = () => {
    let valueArray;
    if (
      props.charactorName === "" ||
      props.skillName === "Select Skill" ||
      Number(props.skillLevel) === 0
    ) {
      valueArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    } else {
      const skill = skillDatas[props.skillName];
      valueArray = skill.min.slice(
        Number(props.skillLevel) - 1,
        Number(props.skillLevel) + 9
      );
    }

    return createData("min damage", valueArray);
  };
  const MaxDmgRow = () => {
    let valueArray;
    if (
      props.charactorName === "" ||
      props.skillName === "Select Skill" ||
      Number(props.skillLevel) === 0
    ) {
      valueArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    } else {
      const skill = skillDatas[props.skillName];
      valueArray = skill.max.slice(
        Number(props.skillLevel) - 1,
        Number(props.skillLevel) + 8
      );
    }

    return createData("max damage", valueArray);
  };
  const CalculatedDmgRow = () => {
    let minArray;
    if (
      props.charactorName === "" ||
      props.skillName === "Select Skill" ||
      Number(props.skillLevel) === 0
    ) {
      minArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    } else {
      const skill = skillDatas[props.skillName];
      minArray = skill.min.slice(
        Number(props.skillLevel) - 1,
        Number(props.skillLevel) + 8
      );
    }
    let maxArray;
    if (
      props.charactorName === "" ||
      props.skillName === "Select Skill" ||
      Number(props.skillLevel) === 0
    ) {
      maxArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    } else {
      const skill = skillDatas[props.skillName];
      maxArray = skill.max.slice(
        Number(props.skillLevel) - 1,
        Number(props.skillLevel) + 8
      );
    }

    return createCalculatedData("calculated damage", minArray, maxArray);
  };
  const AverageDmgRow = () => {
    let minArray;
    if (
      props.charactorName === "" ||
      props.skillName === "Select Skill" ||
      Number(props.skillLevel) === 0
    ) {
      minArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    } else {
      const skill = skillDatas[props.skillName];
      minArray = skill.min.slice(
        Number(props.skillLevel) - 1,
        Number(props.skillLevel) + 8
      );
    }
    let maxArray;
    if (
      props.charactorName === "" ||
      props.skillName === "Select Skill" ||
      Number(props.skillLevel) === 0
    ) {
      maxArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    } else {
      const skill = skillDatas[props.skillName];
      maxArray = skill.max.slice(
        Number(props.skillLevel) - 1,
        Number(props.skillLevel) + 8
      );
    }

    return createAverageData("average damage", minArray, maxArray);
  };

  const SkillTableHead = () => {
    return (
      <TableHead>
        <TableRow>
          <StyledTableCell>{props.skillName}</StyledTableCell>
          <StyledTableCell>{""}</StyledTableCell>
          <StyledTableCell>{""}</StyledTableCell>
          <StyledTableCell>{""}</StyledTableCell>
          <StyledTableCell>{""}</StyledTableCell>
          <StyledTableCell>{""}</StyledTableCell>
          <StyledTableCell>{""}</StyledTableCell>
          <StyledTableCell>{""}</StyledTableCell>
          <StyledTableCell>{""}</StyledTableCell>
          <StyledTableCell>{""}</StyledTableCell>
        </TableRow>{" "}
      </TableHead>
    );
  };

  const SkillTableBody = () => {
    return (
      <TableBody>
        <SkillLevelRow></SkillLevelRow>
        <MasteryRow></MasteryRow>
        <MinDmgRow></MinDmgRow>
        <MaxDmgRow></MaxDmgRow>
        <CalculatedDmgRow></CalculatedDmgRow>
        <AverageDmgRow></AverageDmgRow>
      </TableBody>
    );

    // createData("min damage", [1, 1, 1, 1, 1, 1, 1, 1, 1]),
    // createData("max damage", [1, 1, 1, 1, 1, 1, 1, 1, 1]),
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <SkillTableHead></SkillTableHead>
        <SkillTableBody></SkillTableBody>
      </Table>
    </TableContainer>
  );
}

export default CalculatedTable;
