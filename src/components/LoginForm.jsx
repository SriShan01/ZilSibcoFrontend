import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, IconButton, InputAdornment, Typography } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { login } from './authActions';

const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      branch: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
      branch: Yup.string().required('Required'),
    }),
    onSubmit: values => {
      login(values);
    },
  });

  return (
    <div className="flex justify-center items-center h-screen bg-green-200">
      <div className="bg-white shadow-md rounded px-8 pt-8 pb-12 w-96 min-h-50">
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="username">User Name</InputLabel>
            <TextField
              id="username"
              name="username"
              label="User Name"
              variant="outlined"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
          </FormControl>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="password">Password</InputLabel>
            <TextField
              id="password"
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
          <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="branch">Branch</InputLabel>
            <Select
              id="branch"
              name="branch"
              value={formik.values.branch}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.branch && Boolean(formik.errors.branch)}
            >
              <MenuItem value="">Select Branch</MenuItem>
              {[...Array(10)].map((_, index) => (
                <MenuItem key={index} value={`Branch ${index + 1}`}>Branch {index + 1}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" color="primary" type="submit" style={{ width: '50%' }}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
