import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import CountUp from "react-countup";

const ContinentsTable = ({ continets }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{ borderRadius: "10px", boxShadow: "0" }}
    >
      <Table
        sx={{ minWidth: 650, borderRadius: "10px" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="center">Continent</TableCell>
            <TableCell align="center">Total Cases</TableCell>
            <TableCell align="center">New Cases</TableCell>
            <TableCell align="center">Total Recovered</TableCell>
            <TableCell align="center">New Recovered</TableCell>
            <TableCell align="center">Total Deaths</TableCell>
            <TableCell align="center">New Deaths</TableCell>
            <TableCell align="center">Active Cases</TableCell>
            <TableCell align="center">Critical Cases</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {continets.map((continent) => (
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                {continent.continent}
              </TableCell>
              <TableCell>
                <CountUp
                  start={0}
                  end={continent.cases}
                  duration={2.75}
                  separator="."
                />
              </TableCell>
              <TableCell>
                <CountUp
                  start={0}
                  end={continent.todayCases}
                  duration={2.75}
                  separator="."
                />
              </TableCell>
              <TableCell>
                <CountUp
                  start={0}
                  end={continent.recovered}
                  duration={2.75}
                  separator="."
                />
              </TableCell>
              <TableCell>
                <CountUp
                  start={0}
                  end={continent.todayRecovered}
                  duration={2.75}
                  separator="."
                />
              </TableCell>
              <TableCell>
                <CountUp
                  start={0}
                  end={continent.deaths}
                  duration={2.75}
                  separator="."
                />
              </TableCell>
              <TableCell>
                <CountUp
                  start={0}
                  end={continent.todayDeaths}
                  duration={2.75}
                  separator="."
                />
              </TableCell>
              <TableCell>
                <CountUp
                  start={0}
                  end={continent.active}
                  duration={2.75}
                  separator="."
                />
              </TableCell>
              <TableCell>
                <CountUp
                  start={0}
                  end={continent.critical}
                  duration={2.75}
                  separator="."
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContinentsTable;
