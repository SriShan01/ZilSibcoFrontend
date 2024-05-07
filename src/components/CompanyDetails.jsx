import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Grid } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import companyDetails from '../assets/images/details/companyDetails.png';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'lightgreen',
    padding: theme.spacing(5),
    borderRadius: theme.spacing(1),
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    width: '1100px',
    height: '540px',
  },
  logo: {
    maxWidth: 70,
    marginLeft: theme.spacing(0),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  editButton: {
    textTransform: 'none',
    marginRight: theme.spacing(15),
  },
  gridContainer: {
    alignItems: 'center',
    marginLeft: theme.spacing(10),
  },
  companyDetailsHeading: {
    fontFamily: 'Inter',
    fontWeight: 700,
  },
  companyDetailsText: {
    fontFamily: 'Inter',
    fontWeight: 400,
  },
}));

const CompanyDetails = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" gutterBottom className={classes.companyDetailsHeading}>
        Company Details
      </Typography>
      <Grid container spacing={2} className={classes.gridContainer}>
        <Grid item xs={6}>
          <img src={companyDetails} alt="Logo" className={classes.logo} />
        </Grid>
        <Grid item xs={6} container justify="flex-end" alignItems="center">
          <Button variant="outlined" color="primary" className={classes.editButton}>
            <EditIcon />
            Edit
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" className={classes.companyDetailsText}>Company Name</Typography>
          <Typography variant="body1" className={classes.companyDetailsText}>Headquarters</Typography>
          <Typography variant="body1" className={classes.companyDetailsText}>Contact Person</Typography>
          <Typography variant="body1" className={classes.companyDetailsText}>Contact Details</Typography>
          <Typography variant="body1" className={classes.companyDetailsText}>Employees</Typography>
          <Typography variant="body1" className={classes.companyDetailsText}>Website</Typography>
          <Typography variant="body1" className={classes.companyDetailsText}>Tax Identification Number (TIN)</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" className={classes.companyDetailsText}>ZILLIONe</Typography>
          <Typography variant="body1" className={classes.companyDetailsText}>2 Mary's Road, Galle Rd, 00400</Typography>
          <Typography variant="body1" className={classes.companyDetailsText}>Emily Thompson</Typography>
          <Typography variant="body1" className={classes.companyDetailsText}>0779867998</Typography>
          <Typography variant="body1" className={classes.companyDetailsText}>150</Typography>
          <Typography variant="body1" className={classes.companyDetailsText}>ZILLIONe | Enterprise Technology Solutions | Sri Lanka</Typography>
          <Typography variant="body1" className={classes.companyDetailsText}>EIN 12-3456789</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default CompanyDetails;
