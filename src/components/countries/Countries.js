import React, { useEffect, useState } from "react";
import "../../styles/Countries.css";
import axios from "axios";
import CountriesChart from "./CountriesChart";
import {
  Grid,
  Typography,
  Box,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import CountUp from "react-countup";
import SpecificCountry from "./SpecificCountry";
import CountriesTable from "./CountriesTable";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [countryName, setCountryName] = useState("egypt");
  const [countrySubName, setCountrySubName] = useState("");
  const [countryData, setCountryData] = useState({});

  let countriesNames = [];
  countries.map(({ country }) => countriesNames.sort().push(country));

  const getAllCountries = () => {
    axios
      .get(`https://corona.lmao.ninja/v2/countries?yesterday=1&sort=cases`)
      .then(({ data }) => {
        // console.log(data);
        setCountries(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSpecificCountry = () => {
    axios
      .get(
        `https://corona.lmao.ninja/v2/countries/${countryName}?yesterday=1&strict&query%20`
      )
      .then(({ data }) => {
        // console.log(data);
        setCountryData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  useEffect(() => {
    getSpecificCountry();
  }, [countryName]);

  return (
    <Box pt={12} className="countries" id="countries">
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "500", color: "#4A5568" }}
        mb={4}
      >
        Countries
      </Typography>
      <SpecificCountry
        countryData={countryData}
        countriesNames={countriesNames}
        setCountrySubName={setCountrySubName}
        countrySubName={countrySubName}
        setCountryName={setCountryName}
      />
      <CountriesChart countries={countries} />
      <CountriesTable countries={countries} />
    </Box>
  );
};

export default Countries;
