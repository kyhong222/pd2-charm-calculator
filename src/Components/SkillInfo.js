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

function SkillInfo(props) {
  function createData(name, value) {
    return { name, value };
  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const rows = skillDatas[props.skillName]["synergies_result"].map(
    (element) => {
      return { name: element[0], value: `${element[1]}%` };
    }
  );

  const SkillTableHead = () => {
    return (
      <TableHead>
        <TableRow>
          <StyledTableCell>{"Synergies Info"}</StyledTableCell>
          <StyledTableCell>{""}</StyledTableCell>
        </TableRow>{" "}
      </TableHead>
    );
  };
  const SkillTableBody = () => {
    return (
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    );
  };

  return (
    <TableContainer component={Paper} sx={{ marginTop: 3, marginBottom: 3 }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
        <SkillTableHead></SkillTableHead>
        <SkillTableBody></SkillTableBody>
      </Table>
    </TableContainer>
  );
}

export default SkillInfo;
