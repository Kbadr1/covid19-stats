import React from "react";
import {
  Grid,
  Typography,
  Box,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import CountUp from "react-countup";

const SpecificContenent = ({
  continentData,
  continetSubName,
  setContinentSubName,
  continentsNames,
  setContinentName,
}) => {
  return (
    <Box mb={4}>
      {/* select menu */}
      <Grid container>
        <Grid item xs={0} sm={3} md={4}></Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl
            sx={{
              mb: 3,
              minWidth: 120,
              width: "calc(100% - 20px)",
            }}
          >
            <Select
              sx={{
                height: "35px",
                backgroundColor: "white",
                border: "0",
                color: " rgb(100, 100, 100)",
                textAlign: "left",
                fontWeight: "500",
                outline: "none",
              }}
              value={continetSubName}
              onChange={(e) => {
                setContinentName(e.target.value);
                setContinentSubName(e.target.value);
              }}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="" disabled>
                Select Continent
              </MenuItem>
              {continentsNames.map((continent) => (
                <MenuItem value={continent} key={continent}>
                  {continent}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      {/* SpecificContenent details  */}
      <Grid
        container
        sx={{
          borderRadius: "10px",
          background:
            "linear-gradient(29.55deg, rgb(130, 39, 39) 0%, rgb(237, 100, 166) 100%)",
          color: "white",
        }}
        className="specific-contenet"
        pt={3}
      >
        <Grid item xs={12}>
          <Typography variant="h5" className="continent-name" mb={2}>
            {continentData.continent}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Typography variant="h5" className="number">
            <CountUp
              start={0}
              end={continentData.todayCases}
              duration={2.75}
              separator="."
            />
          </Typography>
          <Typography vairant="subtitle2" className="type">
            Today Cases
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Typography variant="h5" className="number">
            <CountUp
              start={0}
              end={continentData.todayRecovered}
              duration={2.75}
              separator="."
            />
          </Typography>
          <Typography vairant="subtitle2" className="type">
            Today Recovered
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Typography variant="h5" className="number">
            <CountUp
              start={0}
              end={continentData.todayDeaths}
              duration={2.75}
              separator="."
            />
          </Typography>
          <Typography vairant="subtitle2" className="type">
            Today Deaths
          </Typography>
        </Grid>

        <Grid item xs={6} sm={4}>
          <Typography variant="h5" className="number">
            <CountUp
              start={0}
              end={continentData.cases}
              duration={2.75}
              separator="."
            />
          </Typography>
          <Typography vairant="subtitle2" className="type">
            Total Cases
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Typography variant="h5" className="number">
            <CountUp
              start={0}
              end={continentData.recovered}
              duration={2.75}
              separator="."
            />
          </Typography>
          <Typography vairant="subtitle2" className="type">
            Total Recovered
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Typography variant="h5" className="number">
            <CountUp
              start={0}
              end={continentData.deaths}
              duration={2.75}
              separator="."
            />
          </Typography>
          <Typography vairant="subtitle2" className="type">
            Total Deaths
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SpecificContenent;
