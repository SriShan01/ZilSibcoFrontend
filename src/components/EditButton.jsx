import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: 'white',
    border: '1px solid #ccc',
    color: '#333',
    '&:hover': {
      backgroundColor: '#f5f5f5',
    },
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginLeft: theme.spacing(1),
  },
}));

const EditButton = () => {
  const classes = useStyles();

  const handleClick = () => {
    console.log('Edit button clicked');
  };

  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      onClick={handleClick}
    >
      Edit
      <EditIcon className={classes.icon} />
    </Button>
  );
};

export default EditButton;
