import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import './style.css';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar';
import { Box } from '@mui/material';

type Props = {
  title: string;
}

const Dashboard: React.FC<Props> = (props) => {

  const auth = getAuth();
  const [user, setUser] = useState({ loggedin: false, data: {} });
  const nav = useNavigate();

  useEffect(() => {
    if (!auth.currentUser && !user.loggedin) {
      nav('/Login');
      setUser({ loggedin: false, data: {} });
    }
  }, [auth, user, nav]);

  return (
    <Box className="dash-container">
      <div className="dashboard">
        <div className="title">{props.title}</div>
      </div>
      <NavBar fixedToBottom={true} />
    </Box>
  );
};


export default Dashboard;