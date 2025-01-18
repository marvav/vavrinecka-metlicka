import React from 'react';
import {Box, Typography, Link} from "@mui/material";

const Footer: React.FC = () => {
    return (
        <Box
        sx={{
          //backgroundColor: "#282c34",
          color: "white",
          padding: "20px",
          marginTop: "5%",
          textAlign: "center",
          textDecoration:"None",
          backgroundColor: "#151515",
          width: "100%",
          alignItems: "center"
        }}
        >
        <Box>
          <Typography variant="body1">
            Email: {" "}
            <Link 
              href="mailto:vavrinecka-metlicka@seznam.cz" 
              sx={{ 
                color: "#61dafb", 
                textDecoration:"None"
              }}
            >
            vavrinecka-metlicka@seznam.cz
            </Link>
          </Typography>
          <Typography variant="body1">
            Sledujte nás na Facebooku: {" "}
            <Link
              href="https://www.facebook.com/people/Vav%C5%99ineck%C3%A1-Metli%C4%8Dka/61554262512667/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                color: "#61dafb", 
                textDecoration:"None" 
              }}
            >
            Facebook
            </Link>
          </Typography>
          <Typography variant="body1">
            Stránkové autorstvo: <b>Marek Horský</b>, Oliver Horský
          </Typography>
        </Box>
      </Box>
    );
  };

export default Footer;
