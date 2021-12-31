import "./App.css";
import Nav from "./components/nav/Nav";
import { Box, Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AllCases from "./components/all/AllCases";
import Continents from "./components/continents/Continents";
import Countries from "./components/countries/Countries";
import Daily from "./components/daily/Daily";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        <Nav />
        <Container maxWidth="md">
          <AllCases />
          <Daily />
          <Continents />
          <Countries />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
export default App;
