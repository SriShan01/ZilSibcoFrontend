import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Box, Select, MenuItem } from '@material-ui/core';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20px',
    height: '20px',
    border: '1px solid #ccc',
    margin: '0 2px',
    cursor: 'pointer',
    fontSize: '10px',
  },
  arrowBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '24px',
    height: '24px',
    border: '1px solid #ccc',
    margin: '0 2px',
    cursor: 'pointer',
  },
}));

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const classes = useStyles();

  const handlePageChange = (event) => {
    const newPage = parseInt(event.target.value);
    onPageChange(newPage);
  };

  return (
    <div className={classes.root}>
      <Box className={classes.arrowBox}>
        <IconButton
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <ArrowLeftIcon fontSize="small" />
        </IconButton>
      </Box>
      {[...Array(totalPages).keys()].map((page) => (
        <Box
          key={page + 1}
          className={classes.box}
          bgcolor={currentPage === page + 1 ? 'primary.main' : 'inherit'}
          color={currentPage === page + 1 ? 'white' : 'inherit'}
          onClick={() => onPageChange(page + 1)}
        >
          {page + 1}
        </Box>
      ))}
      <Box className={classes.arrowBox}>
        <IconButton
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <ArrowRightIcon fontSize="small" />
        </IconButton>
      </Box>
      <Select
        value={currentPage}
        onChange={handlePageChange}
        size="small"
      >
        {[...Array(totalPages).keys()].map((page) => (
          <MenuItem key={page + 1} value={page + 1}>
            {page + 1}
          </MenuItem>
        ))}
      </Select>
      <span>out of {totalPages}</span>
    </div>
  );
};

export default Pagination;
