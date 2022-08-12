import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Invoice #001", "June 1,2022", "Paid", "Pro Plan", "$25.00"),
  createData("Invoice #001", "June 1,2022", "Paid", "Pro Plan", "$25.00"),
];
export default function Index() {
  return (
    <div className="max-width-table">
      <TableContainer className="transform">
        <Table className="table-main-div" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "gray" }}>Invoive</TableCell>
              <TableCell style={{ color: "gray" }} align="right">
                BILLING DATE
              </TableCell>
              <TableCell style={{ color: "gray" }} align="right">
                STATUS
              </TableCell>
              <TableCell style={{ color: "gray" }} align="right">
                PLAN
              </TableCell>
              <TableCell style={{ color: "gray" }} align="right">
                AMOUNT
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" style={{ color: "#fff" }}>
                  {row.name}
                </TableCell>
                <TableCell style={{ color: "#fff" }} align="right">
                  {row.calories}
                </TableCell>
                <TableCell style={{ color: "#fff" }} align="right">
                  {row.fat}
                </TableCell>
                <TableCell style={{ color: "#fff" }} align="right">
                  {row.carbs}
                </TableCell>
                <TableCell style={{ color: "#fff" }} align="right">
                  {row.protein}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
