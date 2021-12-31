import React, { useEffect, useState } from "react";
import "../../styles/AllCases.css";
import axios from "axios";
import { Box, Grid, Typography } from "@mui/material";
import CountUp from "react-countup";
import hero from "../../images/hero1.svg";

const AllCases = () => {
  const [allCases, setAllCases] = useState({});

  const getAllCases = () => {
    axios
      .get(`https://corona.lmao.ninja/v2/all?yesterday`)
      .then(({ data }) => {
        // console.log(data);
        setAllCases(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllCases();
  }, []);
  return (
    <Box pt={6} id="">
      <Grid container spacing={6}>
        <Grid
          item
          md={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            display: { xs: "none", md: "block" },
          }}
        >
          <img src={hero} style={{ width: "100%" }} />
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box
                className="count-box"
                sx={{
                  background:
                    "linear-gradient(85.21deg, rgb(221, 107, 32) 0%, rgb(246, 173, 85) 100%)",
                }}
              >
                <Typography variant="h5" className="number">
                  <CountUp
                    start={0}
                    end={allCases.cases}
                    duration={2.75}
                    separator="."
                  />
                </Typography>
                <Typography vairant="subtitle2" className="type">
                  Confirmed
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={6}>
              <Box
                className="count-box"
                sx={{
                  background:
                    "linear-gradient(71.78deg, rgb(49, 151, 149) 0%, rgb(129, 230, 217) 99.11%)",
                }}
              >
                <Typography variant="h6" className="number">
                  <CountUp
                    start={0}
                    end={allCases.recovered}
                    duration={2.75}
                    separator="."
                  />
                </Typography>
                <Typography vairant="subtitle2" className="type">
                  Recovered
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={6}>
              <Box
                className="count-box"
                sx={{
                  background:
                    "linear-gradient(69.82deg, rgb(130, 39, 39) 0%, rgb(245, 101, 101) 100%)",
                }}
              >
                <Typography variant="h6" className="number">
                  <CountUp
                    start={0}
                    end={allCases.deaths}
                    duration={2.75}
                    separator="."
                  />
                </Typography>
                <Typography vairant="subtitle2" className="type">
                  Deaths
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={6}>
              <Box
                className="count-box "
                sx={{
                  background:
                    "linear-gradient(69.82deg, rgb(126, 133, 29) 0%, rgb(201, 209, 90)  100%)",
                }}
              >
                <Typography variant="h6" className="number">
                  <CountUp
                    start={0}
                    end={allCases.active}
                    duration={2.75}
                    separator="."
                  />
                </Typography>
                <Typography vairant="subtitle2" className="type">
                  Active
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={6}>
              <Box
                className="count-box "
                sx={{
                  background:
                    "linear-gradient(69.82deg, rgb(101, 39, 130) 0%, rgb(193, 108, 233) 100%)",
                }}
              >
                <Typography variant="h6" className="number">
                  <CountUp
                    start={0}
                    end={allCases.critical}
                    duration={2.75}
                    separator="."
                  />
                </Typography>
                <Typography vairant="subtitle2" className="type">
                  Critical
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AllCases;
