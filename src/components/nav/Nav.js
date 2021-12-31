import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../images/coronavirus-5107715_960_720.png";

const pages = ["daily", "continents", "countries"];

const Nav = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
        color: "#4A5568",
        padding: "4px 0",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
      }}
    >
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "block" } }} onClick={toTop}>
            <img
              src={logo}
              alt=""
              style={{ cursor: "pointer", width: "40px", marginRight: "10px" }}
            />
          </Box>
          <Typography
            onClick={toTop}
            variant="h4"
            noWrap
            component="div"
            sx={{
              cursor: "pointer",
              fontWeight: "700",
              flex: 1,
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            Covid-19
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Button
                    href={`#${page}`}
                    sx={{ color: "black", width: "100%" }}
                  >
                    {page}
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              cursor: "pointer",
            }}
            onClick={toTop}
          >
            Covid-19
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#4A5568",
                  display: "block",
                  fontSize: "15px",
                }}
                href={`#${page}`}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
