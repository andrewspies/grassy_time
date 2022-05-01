import React, {useState} from 'react'
import { 
  Box, 
  ButtonGroup, 
  TextField, 
  Button, 
  FormControlLabel, 
  Switch, 
  FormLabel, 
  FormControl } from '@mui/material';
import './style.css';

type Props = {
  username: string;
}

const Profile: React.FC<Props> = (props: Props) => {

  const [showForm, setShowForm] = useState(false);

  const userUpdate = () => {
    console.log('user update');
  }

  const showEditableForm = () => {
    setShowForm(true);
    console.log('show editable form');
  }

  const setNotifications = () => {
    console.log('set notifications');
  }

  const cancelEditing = () => {
    setShowForm(false);
  }

  return (
    <Box>
      <h3>{props.username}'s Profile</h3>
      <p>Your profile, edit the details by tapping the edit button below.</p>
      <ButtonGroup>
        <Button onClick={showEditableForm}>Edit</Button>
      </ButtonGroup>
      {!!showForm &&
        <form className="edit-form" onSubmit={userUpdate}>

          <TextField name="fname" label="First Name" type="text"></TextField>
          <TextField name="lname" label="Surname" type="text"></TextField>
          <TextField name="email" label="Email Address" type="email"></TextField>
          <TextField name="mobile" label="Mobile Number" helperText="Optional, only used for account recovery &amp; 2-factor authentication."></TextField>

          <FormControl component="fieldset" name="address">
            <FormLabel component="legend">Address</FormLabel>
            <TextField name="address_street" label="Street No. &amp; Name" type="text"></TextField>
            <TextField name="address_complex" label="Complex / Apartment" helperText="Optional" type="text"></TextField>
            <TextField name="address_suburb" label="Suburb" type="text"></TextField>
            <TextField name="address_city" label="City" type="text"></TextField>
            <TextField name="address_state" label="State" type="text"></TextField>
            <TextField name="address_postcode" label="Postcode" type="text"></TextField>
          </FormControl>

          <FormControlLabel control={
            <Switch name="mobile_notifications" defaultChecked></Switch>
          }
            label="Receive MobileNotificatons?"
            color="secondary"
            onChange={setNotifications}
          />

          <FormControlLabel control={
            <Switch name="email_notifications" defaultChecked></Switch>
          }
            label="Receive Email Notificatons?"
            color="secondary"
            onChange={setNotifications}
          />

          <ButtonGroup className="edit-form-buttons">
            <Button type="submit">Update</Button>
            <Button onClick={cancelEditing}>Cancel</Button>
          </ButtonGroup>
        </form>
      }
    </Box>
  )
}

export default Profile;