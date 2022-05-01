import React, { FormEvent, useEffect, useState } from 'react';
import { 
  TextField, 
  ButtonGroup, 
  Button, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  DialogContentText } from '@mui/material';
import './style.css';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { validateErrors } from '../../utils/validators';
import { Box } from '@mui/material';

interface Props {
  logo: string,
  logoAltText: string,
  title: string;
  subtitle: string;
  emailLabel: string;
  emailPlaceholder: string;
  passwordLabel: string;
  loginBtnLabel: string;
  signUpBtnLabel: string;
  FormGroupProps: any;
}

const Login: React.FC<Props> = (props: Props) => {

  const auth = getAuth();
  const [isOpen, setOpen] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState({ loggedin: false, data: {} });
  const nav = useNavigate();

  const toggleOverlay = () => {
    setOpen(!isOpen);
  };

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setUser({ loggedin: true, data: res.user });
        nav('/Dashboard');
      })
      .catch((error) => {
        setError(`Unable to Login. Please try again. If this error persists, please contact support:`);
        toggleOverlay();
        setUser({ loggedin: false, data: {} });
      });
  };

  useEffect(() => {
    if (!user.loggedin) {
      setUser({ loggedin: false, data: {} });
    } else {

      nav('/Dashboard', { state: { user: { loggedin: true } } });
    }
  }, [user, setUser, nav]);

  return (
    <Box className="container login" sx={{ backgroundColor: "primary.dark" }}>
      <div className="header ">
        <div className="logo">
          <img src={props.logo} alt={props.logoAltText} />
        </div>
        <div className="title login-title">{props.title}</div>
      </div>
      <div className="form-container">
        <form onSubmit={handleLogin}>
          <TextField
            sx={{ marginBottom: '18px', marginTop: '10px' }}
            inputProps={{
              inputMode: 'email',
              autoComplete: 'on',
              autoFocus: true,
            }}
            label="email"
            name="email"
            id="email"
            type="email"
            fullWidth={true}
            placeholder={props.emailPlaceholder}
            onBlur={(e) => validateErrors(e, setError)}
            error={!!error}
          >
          </TextField>
          <TextField
            sx={{ marginBottom: '10px' }}
            inputProps={{ inputMode: 'email', autoComplete: 'on' }}
            name="password"
            id="password"
            type="password"
            fullWidth={true}
            placeholder="**********"
            onBlur={(e) => validateErrors(e, setError)}
            error={!!error}
          >
          </TextField>
          {
            !!validateErrors &&
            <div className="error-message">{error}</div>
          }
          <ButtonGroup variant="contained">
            <Button type="submit" color="secondary">{props.loginBtnLabel}</Button>
            <Button component={Link} to="/Signup" color="primary">{props.signUpBtnLabel}</Button>
          </ButtonGroup>
        </form>
      </div>
      <div className="overlay-container">
        <Dialog
        sx={{textAlign: 'center'}}
          open={isOpen}
          onClose={toggleOverlay}
        >
          <DialogTitle>
            {"An Error Has Occured"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {error} 
              <a style={{color: "#f44336" }} href="mailto:support@grassy-time.co.za">support@grassy-time.co.za</a>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="error" onClick={toggleOverlay} autoFocus>Close</Button>
          </DialogActions>
        </Dialog>
      </div>
    </Box>
  )
};



export default Login;