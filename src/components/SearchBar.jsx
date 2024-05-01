import React from 'react';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';

function SearchBar() {
  return (
    <TextField
      placeholder="Search by User Name, Full Name"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{
        height: '40px',
        width: '350px',
        '& .MuiInputBase-input': {
          height: '30px', 
          padding: '10px 20px',
        },
        '& .MuiInputBase-root': {
          borderRadius: '25px',
          height: '50px',
        },
      }}
    />
  );
}

export default SearchBar;
