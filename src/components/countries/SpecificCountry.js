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

const SpecificCountry = ({
  countriesNames,
  setCountrySubName,
  countrySubName,
  setCountryName,
  countryData,
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
              value={countrySubName}
              onChange={(e) => {
                setCountryName(e.target.value);
                setCountrySubName(e.target.value);
              }}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="" disabled>
                Select Country
              </MenuItem>
              {countriesNames.map((country) => (
                <MenuItem value={country} key={country}>
                  {country}
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
        className="specific-country"
        pt={3}
      >
        <Grid item xs={12}>
          <Typography variant="h5" className="country-name" mb={2}>
            {countryData.country}
          </Typography>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Typography variant="h5" className="number">
            <CountUp
              start={0}
              end={countryData.todayCases}
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
              end={countryData.todayRecovered}
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
              end={countryData.todayDeaths}
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
              end={countryData.cases}
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
              end={countryData.recovered}
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
              end={countryData.deaths}
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

export default SpecificCountry;
