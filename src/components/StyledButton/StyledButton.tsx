import { styled } from "@mui/material";
import { ReactNode } from "react";


interface StyledButtonProps{
    children: ReactNode
}

const StyledButton: React.FC<StyledButtonProps> = ({children}) =>{
    const StyledButton = styled("button")(({theme}) => ({
            background : "transparent",
            border: `1px solid white`,
            borderRadius: "3px",
            padding: "5px 15px",
            width: "100%",
            color: "white",
            display:"inline-flex",
            alignItems: "center",
            justifyContent:"center",
            gap: "10px",
          
            cursor: "pointer",
            
          
            '&:hover':{
                backgroundColor: '#F1BC00'
            }
      }));
    return (
      <>
      <StyledButton>{children}</StyledButton>
    
      </>
    )
  }
  
  export default StyledButton