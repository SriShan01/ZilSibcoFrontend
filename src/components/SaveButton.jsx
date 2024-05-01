import React from 'react';
import Button from '@mui/material/Button';
import { withStyles } from '@mui/styles';

// Define custom styles
const styles = {
  root: {
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    border: '2px solid #9ccc65',
    color: '#9ccc65',
    '&:hover': {
      backgroundColor: '#f0f0f0',
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
