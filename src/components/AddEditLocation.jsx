import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Typography, FormControl, Select, MenuItem, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formContainer: {
    backgroundColor: 'white',
    padding: theme.spacing(4),
    borderRadius: theme.spacing(1),
    boxShadow: theme.shadows[3],
    width: '500px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  formTitle: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  formButtonContainer: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
  formButton: {
    fontWeight: 'bold',
  },
}));

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  province: Yup.string().required('Province is required'),
  postalCode: Yup.string().required('Postal Code is required'),
  phone: Yup.string().required('Phone is required'),
});

const AddEditLocation = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      province: '',
      postalCode: '',
      phone: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box className={classes.formContainer}>
      <form onSubmit={formik.handleSubmit}>
        <Typography variant="h5" className={classes.formTitle}>
          Location Name
        </Typography>
        <Typography variant="subtitle1">Name</Typography>
        <TextField
          name="name"
          fullWidth
          margin="normal"
          variant="outlined"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <Typography variant="subtitle1">Address</Typography>
        <TextField
          name="address"
          fullWidth
          margin="normal"
          variant="outlined"
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.touched.address && Boolean(formik.errors.address)}
          helperText={formik.touched.address && formik.errors.address}
        />
        <Typography variant="subtitle1">City</Typography>
        <TextField
          name="city"
          fullWidth
          margin="normal"
          variant="outlined"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
        />
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl fullWidth margin="normal">
              <Typography variant="subtitle1">Province</Typography>
              <Select
                name="province"
                value={formik.values.province}
                onChange={formik.handleChange}
                error={formik.touched.province && Boolean(formik.errors.province)}
              >
                <MenuItem value="1">Province 1</MenuItem>
                <MenuItem value="2">Province 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1">Postal Code</Typography>
            <TextField
              name="postalCode"
              fullWidth
              margin="normal"
              variant="outlined"
              value={formik.values.postalCode}
              onChange={formik.handleChange}
              error={formik.touched.postalCode && Boolean(formik.errors.postalCode)}
              helperText={formik.touched.postalCode && formik.errors.postalCode}
            />
          </Grid>
        </Grid>
        <Typography variant="subtitle1">Phone</Typography>
        <TextField
          name="phone"
          fullWidth
          margin="normal"
          variant="outlined"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        <Box className={classes.formButtonContainer}>
          <Button type="submit" variant="contained" color="primary" className={classes.formButton}>
            Save
          </Button>
          <Button variant="contained" color="secondary" className={classes.formButton}>
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddEditLocation;
