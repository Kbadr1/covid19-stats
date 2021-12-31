import React, { useEffect, useState } from "react";
import "../../styles/Continents.css";
import axios from "axios";
import ContinentsChart from "./ContinentsChart";
import {
  Grid,
  Typography,
  Box,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import CountUp from "react-countup";
import ContinentsTable from "./ContinentsTable";
import SpecificContenent from "./SpecificContenent";

const Continents = () => {
  const [continets, setContinents] = useState([]);
  const [continentName, setContinentName] = useState("europe");
  const [continetSubName, setContinentSubName] = useState("");
  const [continentData, setContinentData] = useState({});

  let continentsNames = [];
  continets.map(({ continent }) => continentsNames.sort().push(continent));

  const getAllContinents = () => {
    axios
      .get(`https://corona.lmao.ninja/v2/continents?yesterday=1&sort=cases`)
      .then(({ data }) => {
        // console.log(data);
        setContinents(data);
      });
  };

  const getSpecificContinent = () => {
    axios
      .get(
        `https://corona.lmao.ninja/v2/continents/${continentName}?yesterday=1&strict`
      )
      .then(({ data }) => {
        // console.log(data);
        setContinentData(data);
      });
  };

  useEffect(() => {
    getAllContinents();
  }, []);

  useEffect(() => {
    getSpecificContinent();
  }, [continentName]);

  return (
    <Box pt={12} className="continents" id="continents">
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "500", color: "#4A5568" }}
        mb={4}
      >
        Continents
      </Typography>
      <SpecificContenent
        continentData={continentData}
        continetSubName={continetSubName}
        setContinentSubName={setContinentSubName}
        continentsNames={continentsNames}
        setContinentName={setContinentName}
      />
      <ContinentsChart continets={continets} />
      <ContinentsTable continets={continets} />
    </Box>
  );
};

export default Continents;
