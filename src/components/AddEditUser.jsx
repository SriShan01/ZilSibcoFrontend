import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Modal, Paper, Typography } from '@mui/material';

const AddEditUser = ({ mode, onSave, onCancel, open, onClose }) => {
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [role, setRole] = useState('');
  const [pin, setPin] = useState('');
  const [permissionGroup, setPermissionGroup] = useState('');
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      userName,
      firstName,
      lastName,
      contact,
      role,
      pin,
      permissionGroup,
      location,
      password,
      confirmPassword,
    };
    onSave(userData);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="user-form-popup"
      aria-describedby="user-form-popup-description"
    >
      <Paper style={{ padding: '20px', maxWidth: '500px', margin: '50px auto', backgroundColor: '#fff' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <Typography variant="subtitle1" style={{ display: 'inline-block', marginRight: '5px' }}>User Name<sup style={{ color: 'red' }}>*</sup></Typography>
            <TextField
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              fullWidth
              size="small"
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <Typography variant="subtitle1" style={{ display: 'inline-block', marginRight: '5px' }}>Full Name<sup style={{ color: 'red' }}>*</sup></Typography>
          </div>
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <TextField
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={{ marginRight: '10px' }}
              fullWidth
              size="small"
            />
            <TextField
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              fullWidth
              size="small"
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <Typography variant="subtitle1" style={{ display: 'inline-block', marginRight: '5px' }}>Email or Phone<sup style={{ color: 'red' }}>*</sup></Typography>
            <TextField
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              fullWidth
              size="small"
            />
          </div>
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px' }}>
              <Typography variant="subtitle1" style={{ display: 'inline-block', marginRight: '5px' }}>User Role<sup style={{ color: 'red' }}>*</sup></Typography>
              <FormControl>
                <InputLabel>User Role</InputLabel>
                <Select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  size="small"
                >
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="user">User</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <Typography variant="subtitle1" style={{ display: 'inline-block', marginRight: '5px' }}>PIN Number<sup style={{ color: 'red' }}>*</sup></Typography>
              <TextField
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                size="small"
              />
            </div>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <Typography variant="subtitle1" style={{ display: 'inline-block', marginRight: '5px' }}>Assign Permission Group<sup style={{ color: 'red' }}>*</sup></Typography>
            <FormControl>
              <InputLabel>Assign Permission Group</InputLabel>
              <Select
                value={permissionGroup}
                onChange={(e) => setPermissionGroup(e.target.value)}
                size="small"
              >
                {/* Dropdown options for permission groups */}
              </Select>
            </FormControl>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <Typography variant="subtitle1" style={{ display: 'inline-block', marginRight: '5px' }}>Assign Location<sup style={{ color: 'red' }}>*</sup></Typography>
            <FormControl>
              <InputLabel>Assign Location</InputLabel>
              <Select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                size="small"
              >
                {/* Dropdown options for locations */}
              </Select>
            </FormControl>
          </div>
          {mode === 'add' && (
            <>
              <div style={{ display: 'flex', marginBottom: '10px' }}>
                <div style={{ marginRight: '10px' }}>
                  <Typography variant="subtitle1" style={{ display: 'inline-block', marginRight: '5px' }}>Password<sup style={{ color: 'red' }}>*</sup></Typography>
                  <TextField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    fullWidth
                    size="small"
                  />
                </div>
                <div>
                  <Typography variant="subtitle1" style={{ display: 'inline-block', marginRight: '5px' }}>Confirm Password<sup style={{ color: 'red' }}>*</sup></Typography>
                  <TextField
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"
                    fullWidth
                    size="small"
                  />
                </div>
              </div>
            </>
          )}

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
            <Button type="submit" variant="contained" color="primary" style={{ marginRight: '10px' }}>
              Save
            </Button>
            <Button onClick={onCancel} variant="contained" color="secondary">
              Cancel
            </Button>
          </div>
        </form>
      </Paper>
    </Modal>
  );
};

export default AddEditUser;
