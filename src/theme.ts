import { createTheme, responsiveFontSizes } from '@mui/material/styles';



let theme = createTheme({
  palette: {
    primary: {
      main: "#F1BC00",
    },
    secondary: {
      main: "#FFFFFF",
      
    },
    
  },
  typography:{
    fontFamily:['"Poppins"'].join(','),
  }
});
theme =  responsiveFontSizes(theme);
export default theme;