import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import Paper from "@mui/material/Paper";
import "./style.css";

interface Props {
  fixedToBottom?: boolean;
  fixedToTop?: boolean;
}

const NavBar: React.FC<Props> = (props) => {

  const nav = useNavigate();
  const [value, setValue] = useState('/Dashboard');
  const white = '#fff';

  // let fixToBottomClass = props.fixedToBottom === true ? 'bp4-fixed-bottom fix-to-bottom ' : '';

  const navigate = (link: string) => {
    return nav(link);
  };

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        showLabels={true}
        value={value}
        onChange={(event, newValue) => {
          console.log(newValue);
          setValue(newValue);
          navigate(newValue);
        }}
      >
        <BottomNavigationAction label="Dashboard" value="/Dashboard" icon={<DashboardRoundedIcon sx={{ color: white}} />} />
        <BottomNavigationAction label="Profile" value="/Profile" icon={<SpeedRoundedIcon sx={{color: white}} />} />
        <BottomNavigationAction label="Settings" value="/Settings" icon={<SettingsRoundedIcon sx={{color: white}} /> } />
      </BottomNavigation>
    </Paper>

  )
};

export default NavBar;