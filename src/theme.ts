import { createTheme, responsiveFontSizes } from '@mui/material/styles';


let theme = createTheme({
  palette: {
    primary: {
      main: "#F1BC00",
    },
    secondary: {
      main: "#121212",
    },
  },
  typography:{
    fontFamily:["Helvetica Neue"].join(','),
  }
});
theme =  responsiveFontSizes(theme);
export default theme;