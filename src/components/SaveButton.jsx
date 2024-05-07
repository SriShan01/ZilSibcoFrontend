import React from 'react';
import Button from '@mui/material/Button';
import { withStyles } from '@mui/styles';
import { grey } from '@mui/material/colors';

const styles = {
  root: {
    position: 'absolute',
    backgroundColor: '#9ABEA1',
    color: '#ffffff',
    width: '115px',
    height: '40px',
    borderRadius: '10px 0px 0px 0px',
    border: '1px solid #9ABEA1',
    fontWeight: 700,
    '&:hover': {
      backgroundColor: grey[300],
    },
  },
};

const SaveButton = withStyles(styles)(({ classes }) => {
  const handleSave = () => {
    console.log('Save button clicked!');
  };

  return (
    <Button className={classes.root} variant="outlined" onClick={handleSave}>
      Save
    </Button>
  );
});

export default SaveButton;
