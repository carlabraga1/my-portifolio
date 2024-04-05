import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"


const NavBar = () =>{

        const StyledToobar = styled(Toolbar)(({}) => ({
            display: "flex",
            justifyContent: "space-evenly",
            background:"#121212",
            color:"#F1BC00"
        }))

    return (
      <>
      <AppBar position="absolute">
        <StyledToobar>
        <MenuItem>About</MenuItem>
        <MenuItem>Skills</MenuItem>
        <MenuItem>Projects</MenuItem>
        </StyledToobar>
      </AppBar>

      </>
    )
  }
  
  export default NavBar