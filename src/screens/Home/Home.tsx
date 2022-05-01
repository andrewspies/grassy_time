import React from "react";
import './style.css';
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import { Box } from "@mui/material";
import { LoginRounded } from "@mui/icons-material";

type Props = {
  title: string;
  subtitle: string;
  logo: string;
  logoAltText: string;
  link: string;
  buttonLabel: string;
}

const Home: React.FC<Props> = (props) => {

  return (
    <Box className="container" sx={{backgroundColor: "primary.dark"}}>
      <section>
        <div className="home-logo"><img src={props.logo} alt={props.logoAltText}/></div>
        <div className="subtitle">{props.subtitle}</div>
        <div className="startBtn">
          <Link to={props.link}>
            <Button variant="contained" color="secondary" endIcon={<LoginRounded />}>{props.buttonLabel} </Button>
          </Link>
        </div>
      </section>
    </Box>

  )
}

export default Home;