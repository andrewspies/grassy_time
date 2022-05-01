import React, { useCallback } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import * as firebaseConfig from './firebase.config.json';
import './App.css';
import Home from './screens/Home';
import logo from './assets/logo/Logo.png';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import Profile from './screens/Profile';
import { getAuth } from 'firebase/auth';
import Signup from './screens/Signup/Signup';

const App = () => {

  const firebase = {
    firebaseConfig
  };

  const app = initializeApp(firebase.firebaseConfig);
  const auth = getAuth(app);
  const nav = useNavigate();

  const RequireAuth = ( {children}: {children: JSX.Element} ) => {
    if (!auth.currentUser?.uid) {
      return <Navigate to="/" replace />;
    }
    return children;
  }

  
  const isLoggedIn = useCallback(() => {
    return auth.currentUser?.uid !== undefined || auth.currentUser?.uid !== null;
  }, [auth]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <Home
            title='Grassy Time'
            subtitle='Know when to Mow!'
            link='/Login'
            logo={logo}
            logoAltText='Grassy Time Logo'
            buttonLabel='Get Started'
          />}>
        </Route>
        <Route path='/Login' element={
          <Login
            logo={logo}
            logoAltText='Grassy Time Logo on Login Page'
            title='Login'
            subtitle='Know when to Mow!'
            emailLabel='Email'
            emailPlaceholder='Enter your email'
            passwordLabel='Password'
            loginBtnLabel='Login'
            signUpBtnLabel='Sign Up'
            FormGroupProps={{}}
          />
        }>
        </Route>
        <Route path='/Signup' element={
          <Signup
            logo={logo}
            logoAltText='Grassy Time Sign up on Login Page'
            title='Sign Up'
            subtitle='Know when to Mow!'
            emailLabel='Email'
            emailPlaceholder='Enter your email'
            passwordLabel='Password'
            loginBtnLabel='Already Have an Account? Try Login'
            signUpBtnLabel='Register'
            FormGroupProps={{}}
          />}>
        </Route>
        <Route path='/Dashboard' element={
          <RequireAuth>
            <Dashboard
              title='Dashboard'
            />
          </RequireAuth>
        }>
        </Route>
        <Route path='/Profile' element={
          <RequireAuth>
            <Profile
              username='Jocky Nash'
            />
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
