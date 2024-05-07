import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Box, Typography, InputAdornment, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  formButtonContainer: {
    textAlign: 'center',
  },
  formContainer: {
    backgroundColor: 'white',
    padding: theme.spacing(5),
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[3],
    width: '400px',
    display: 'flex',
    justifyContent: 'center',
  },
  pageContainer: {
    backgroundImage: `url('../src/assets/images/background/background.png')`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formTitle: {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(1),
  },
  formButton: {
    fontWeight: 'bold',
    width: '80%',
    marginTop: theme.spacing(2),
    backgroundColor: 'white',
    color: '#07650B',
    boxShadow: theme.shadows[3],
    '&:hover': {
      backgroundColor: 'lightgreen',
    },
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  subtitle: {
    fontWeight: 400,
    fontFamily: 'Inter, sans-serif'
  },
  input: {
    marginBottom: theme.spacing(2),
    "& input": {
      padding: '10px 10px',
      fontFamily: 'Inter, sans-serif'
    }
  },
  formControl: {
    marginBottom: theme.spacing(5),
  },
}));

const formSchema = {
  login: Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    location: Yup.string().required('Location is required'),
  }),
  changePassword: Yup.object().shape({
    newPassword: Yup.string().required('New Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  }),
  changePasswordAndPin: Yup.object().shape({
    newPassword: Yup.string().required('New Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    pinNumber: Yup.string().required('PIN Number is required'),
    confirmPinNumber: Yup.string()
      .oneOf([Yup.ref('pinNumber'), null], 'PIN Numbers must match')
      .required('Confirm PIN Number is required'),
  }),
  checkIn: Yup.object().shape({
    date: Yup.date().required('Date is required'),
    time: Yup.string().required('Time is required'),
  }),
};

const FormComponent = ({ scenario }) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);
  const initialValues = {
    username: '',
    password: '',
    location: '',
    newPassword: '',
    confirmPassword: '',
    pinNumber: '',
    confirmPinNumber: '',
    date: '',
    time: '',
  };

  const validationSchema = formSchema[scenario];

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const date = now.toISOString().split('T')[0];
      const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
      setCurrentDate(date);
      setCurrentTime(time);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box className={classes.pageContainer}>
      <Box className={classes.formContainer}>
        <form onSubmit={formik.handleSubmit}>
          <Typography variant="h5" className={classes.formTitle}>
            {scenario === 'login' && 'Login'}
            {scenario === 'changePassword' && 'Change Password'}
            {scenario === 'changePasswordAndPin' && 'Change Password and PIN'}
            {scenario === 'checkIn' && 'Check In'}
          </Typography>
          {scenario === 'login' && (
            <>
            <Box mb={2}>
              <Typography variant="subtitle1" className={classes.subtitle} style={{ color: '#07650B' }}>User Name</Typography>
              <TextField
                name="username"
                variant="outlined"
                fullWidth
                value={formik.values.username}
                onChange={formik.handleChange}
                placeholder="User Name"
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
                className={classes.input}
              />
            </Box>
            <Box mb={2}>
              <Typography variant="subtitle1" className={classes.subtitle} style={{ color: '#07650B' }}>Password</Typography>
              <TextField
                type={showPassword ? 'text' : 'password'}
                name="password"
                variant="outlined"
                fullWidth
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="Password"
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                InputProps={{
                  endAdornment: (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Button size="" onClick={handleTogglePasswordVisibility} style={{ color: '#07650B' }}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </Button>
                    </div>
                  ),
                }}
                className={classes.input}
              />
            </Box>
            <Box mb={2}>
              <Typography variant="subtitle1" className={classes.subtitle} style={{ color: '#07650B' }}>Location</Typography>
              <FormControl variant="outlined" fullWidth className={classes.formControl}>
                <Select
                  name="location"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  placeholder="Location Name"
                  error={formik.touched.location && Boolean(formik.errors.location)}
                >
                  <MenuItem value="">Location Name</MenuItem>
                  <MenuItem value="Location 1">Location 1</MenuItem>
                  <MenuItem value="Location 2">Location 2</MenuItem>
                </Select>
              </FormControl>
              {formik.touched.location && formik.errors.location && (
                <Typography variant="subtitle2" color="error">
                  {formik.errors.location}
                </Typography>
              )}
            </Box>
          </>
          )}
          {scenario === 'changePassword' && (
            <>
            <Typography style={{ marginBottom: '16px', fontFamily: 'Inter', fontWeight: 500 }}>Please reset your password to continue!</Typography>
              <Box mb={2}>
                <Typography variant="subtitle1" className={classes.subtitle} style={{ color: '#07650B' }}>New Password</Typography>
                <TextField
                  type={showPassword ? 'text' : 'password'}
                  name="newPassword"
                  variant="outlined"
                  fullWidth
                  value={formik.values.newPassword}
                  onChange={formik.handleChange}
                  placeholder="Enter New Password"
                  error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
                  helperText={formik.touched.newPassword && formik.errors.newPassword}
                  InputProps={{
                    endAdornment: (
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Button size="" onClick={handleTogglePasswordVisibility} style={{ color: '#07650B' }}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </Button>
                    </div>
                    ),
                  }}
                />
              </Box>
              <Box mb={2}>
                <Typography variant="subtitle1" className={classes.subtitle} style={{ color: '#07650B' }}>Confirm Password</Typography>
                <TextField
                  type="password"
                  name="confirmPassword"
                  variant="outlined"
                  fullWidth
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  placeholder="Enter Confirm Password"
                  error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                  helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                  InputProps={{
                    endAdornment: (
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Button size="" onClick={handleTogglePasswordVisibility} style={{ color: '#07650B' }}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </Button>
                    </div>
                    ),
                  }}
                />
              </Box>
            </>
          )}
          {scenario === 'changePasswordAndPin' && (
            <>
            <Typography style={{ marginBottom: '16px', fontFamily: 'Inter', fontWeight: 500 }}>Please reset your password to continue!</Typography>
              <Box mb={2}>
                <Typography variant="subtitle1" className={classes.subtitle} style={{ color: '#07650B' }}>New Password</Typography>
                <TextField
                  type="password"
                  name="newPassword"
                  variant="outlined"
                  fullWidth
                  value={formik.values.newPassword}
                  onChange={formik.handleChange}
                  placeholder="Enter New Password"
                  error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
                  helperText={formik.touched.newPassword && formik.errors.newPassword}
                  InputProps={{
                    endAdornment: (
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Button size="" onClick={handleTogglePasswordVisibility} style={{ color: '#07650B' }}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </Button>
                      </div>
                    ),
                  }}
                />
              </Box>
              <Box mb={2}>
                <Typography variant="subtitle1" className={classes.subtitle} style={{ color: '#07650B' }}>Confirm Password</Typography>
                <TextField
                  type="password"
                  name="confirmPassword"
                  variant="outlined"
                  fullWidth
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  placeholder="Enter Confirm Password"
                  error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                  helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                  InputProps={{
                    endAdornment: (
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Button size="" onClick={handleTogglePasswordVisibility} style={{ color: '#07650B' }}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </Button>
                      </div>
                    ),
                  }}
                />
              </Box>
              <Box mb={2}>
                <Typography variant="subtitle1" className={classes.subtitle} style={{ color: '#07650B' }}>PIN Number</Typography>
                <TextField
                  name="pinNumber"
                  variant="outlined"
                  fullWidth
                  value={formik.values.pinNumber}
                  onChange={formik.handleChange}
                  placeholder="Create PIN Number"
                  error={formik.touched.pinNumber && Boolean(formik.errors.pinNumber)}
                  helperText={formik.touched.pinNumber && formik.errors.pinNumber}
                  InputProps={{
                    endAdornment: (
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Button size="" onClick={handleTogglePasswordVisibility} style={{ color: '#07650B' }}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </Button>
                      </div>
                    ),
                  }}
                />
              </Box>
              <Box mb={2}>
                <Typography variant="subtitle1" className={classes.subtitle} style={{ color: '#07650B' }}>Confirm PIN Number</Typography>
                <TextField
                  name="confirmPinNumber"
                  variant="outlined"
                  fullWidth
                  value={formik.values.confirmPinNumber}
                  onChange={formik.handleChange}
                  placeholder="Confirm PIN Number"
                  error={formik.touched.confirmPinNumber && Boolean(formik.errors.confirmPinNumber)}
                  helperText={formik.touched.confirmPinNumber && formik.errors.confirmPinNumber}
                  InputProps={{
                    endAdornment: (
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Button size="" onClick={handleTogglePasswordVisibility} style={{ color: '#07650B' }}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </Button>
                      </div>
                    ),
                  }}
                />
              </Box>
            </>
          )}
          {scenario === 'checkIn' && (
            <>
            <Box display="flex" alignItems="center" mb={2}>
              <Typography variant="subtitle1" className={classes.subtitle} style={{ color: '#07650B', marginRight: '8px' }}>Date:</Typography>
              <TextField
                type="date"
                name="date"
                fullWidth
                value={currentDate}
                InputLabelProps={{ shrink: true }}
                disabled
              />
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <Typography variant="subtitle1" className={classes.subtitle} style={{ color: '#07650B', marginRight: '8px' }}>Time:</Typography>
              <TextField
                type="time"
                name="time"
                fullWidth
                value={currentTime}
                InputLabelProps={{ shrink: true }}
                disabled
              />
            </Box>
          </>
          

          )}
          <Box mb={2} className={classes.formButtonContainer}>
            <Button type="submit" variant="contained" className={classes.formButton}>
              {scenario === 'login' && 'Login'}
              {scenario === 'changePassword' && 'Continue'}
              {scenario === 'changePasswordAndPin' && 'Continue'}
              {scenario === 'checkIn' && 'Check In'}
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default FormComponent;
