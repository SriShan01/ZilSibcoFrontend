import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

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
  const initialValues = {
    username: '',
    password: '',
    location: '',
    newPassword: '',
    confirmPassword: '',
    pinNumber: '',
    confirmPinNumber: '',
    date: new Date(),
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

  return (
    <form onSubmit={formik.handleSubmit}>
      {scenario === 'login' && (
        <>
          <h2>Login</h2>
          <TextField
            name="username"
            label="User Name"
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            type="password"
            name="password"
            label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <FormControl>
            <InputLabel>Location</InputLabel>
            <Select
              name="location"
              value={formik.values.location}
              onChange={formik.handleChange}
              error={formik.touched.location && Boolean(formik.errors.location)}
            >
              <MenuItem value="">Select Location</MenuItem>
              <MenuItem value="location1">Location 1</MenuItem>
              <MenuItem value="location2">Location 2</MenuItem>
              <MenuItem value="location3">Location 3</MenuItem>
            </Select>
          </FormControl>
          <Button type="submit">Login</Button>
        </>
      )}
      {scenario === 'changePassword' && (
        <>
          <h2>Change Password</h2>
          <TextField
            type="password"
            name="newPassword"
            label="New Password"
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
            helperText={formik.touched.newPassword && formik.errors.newPassword}
          />
          <TextField
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          />
          <Button type="submit">Continue</Button>
        </>
      )}
      {scenario === 'changePasswordAndPin' && (
        <>
          <h2>Change Password and PIN</h2>
          <TextField
            type="password"
            name="newPassword"
            label="New Password"
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
            helperText={formik.touched.newPassword && formik.errors.newPassword}
          />
          <TextField
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          />
          <TextField
            name="pinNumber"
            label="PIN Number"
            value={formik.values.pinNumber}
            onChange={formik.handleChange}
            error={formik.touched.pinNumber && Boolean(formik.errors.pinNumber)}
            helperText={formik.touched.pinNumber && formik.errors.pinNumber}
          />
          <TextField
            name="confirmPinNumber"
            label="Confirm PIN Number"
            value={formik.values.confirmPinNumber}
            onChange={formik.handleChange}
            error={formik.touched.confirmPinNumber && Boolean(formik.errors.confirmPinNumber)}
            helperText={formik.touched.confirmPinNumber && formik.errors.confirmPinNumber}
          />
          <Button type="submit">Continue</Button>
        </>
      )}
      {scenario === 'checkIn' && (
        <>
          <h2>Check In</h2>
          <TextField
            type="date"
            name="date"
            label="Date"
            value={formik.values.date}
            onChange={formik.handleChange}
            error={formik.touched.date && Boolean(formik.errors.date)}
            helperText={formik.touched.date && formik.errors.date}
          />
          <TextField
            type="time"
            name="time"
            label="Time"
            value={formik.values.time}
            onChange={formik.handleChange}
            error={formik.touched.time && Boolean(formik.errors.time)}
            helperText={formik.touched.time && formik.errors.time}
          />
          <Button type="submit">Check In</Button>
          <Button>Skip</Button>
        </>
      )}
    </form>
  );
};

export default FormComponent;
