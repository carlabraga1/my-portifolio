import styled from "@emotion/styled";
import Eu from "../../../../assets/images/eu.jpeg";
import Grid from "@mui/material/Grid";
import {Box, Container, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
  const StyledHero = styled("div")(({theme}) => ({
    backgroundColor: "#121212",
    height: "100vh",
    
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up('xs')]: { // <= mobile
      paddingTop: "100px",

  },
  [theme.breakpoints.up('md')]: { // >=mobile
      paddingTop: "0",
  }
}))

  const StyledImg = styled("img")(() => ({
    width: "85%",
    borderRadius: "50%",
    border: `1px solid white`
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-150} right={0}>
                  <AnimatedBackground/>
                </Box>
                <Box position="relative" textAlign="center"><StyledImg src={Eu} /></Box>
              </Box>
              
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography color="secondary" variant="h3" textAlign="center" pb={2} mt={10}>
               Hi, I'm Carla Braga🖐️
              </Typography>
              <Typography color="primary" variant="h4" textAlign="center">
                 Software Engineer
              </Typography>
              <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                  
                >
            
                  <StyledButton onClick={() => console.log('download')}>
                  <DownloadIcon />
                    Download CV
                    
                  </StyledButton>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton onClick={() => console.log('contact')}>
                    <EmailIcon /> Contact me
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
