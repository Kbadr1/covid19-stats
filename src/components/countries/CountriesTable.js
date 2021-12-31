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

const CountriesTable = ({ countries }) => {
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
            <TableCell align="center">country</TableCell>
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
          {countries.map((country) => (
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                {country.country}
              </TableCell>
              <TableCell>
                <CountUp
                  start={0}
                  end={country.cases}
                  duration={2.75}
                  separator="."
                />
              </TableCell>
              <TableCell>
                <CountUp
                  start={0}
                  end={country.todayCases}
                  duration={2.75}
                  separator="."
                />
              </TableCell>
              <TableCell>
                <CountUp
                  start={0}
                  end={country.recovered}
                  duration={2.75}
                  separator="."
                />
              </TableCell>
              <TableCell>
                <CountUp
                  start={0}
                  end={country.todayRecovered}
                  duration={2.75}
                  separator="."
                />
              </TableCell>
              <TableCell>
                <CountUp
                  start={0}
                  end={country.deaths}
                  duration={2.75}
                  separator="."
                />
              </TableCell>
              <TableCell>
                <CountUp
                  start={0}
                  end={country.todayDeaths}
                  duration={2.75}
                  separator="."
                />
              </TableCell>
              <TableCell>
                <CountUp
                  start={0}
                  end={country.active}
                  duration={2.75}
                  separator="."
                />
              </TableCell>
              <TableCell>
                <CountUp
                  start={0}
                  end={country.critical}
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

export default CountriesTable;
