import {useState} from 'react'
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import ListItemText from "@mui/material/ListItemText";
import data from '../data/data.js'


export const IntermediateCitySelect=({intermediateCity, setintermediateCity}) => {
  
  

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    


    setintermediateCity(
      
      value,
    );
  };

  return (
    
      <FormControl sx={{ minWidth: 120, m: 1, width:300 }}>
        <InputLabel id="intermediatecity-chip-label">Intermediate Cities</InputLabel>
        <Select
          labelId="intermediatecity-chip-label"
          id="intermediatecity-chip"
          defaultValue={[]}
          multiple
          value={intermediateCity}
          onChange={handleChange}
          input={<OutlinedInput id="intermediatecity-chip" label="Intermediate Cities" />}
          renderValue={(selected) => (
            <Box >
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          // MenuProps={MenuProps}
        >
           {data.map((city, index) =>
            <MenuItem key={index} value={city[0]}>
              <ListItemText primary={city[0]} />
            </MenuItem>
          )}
        </Select>
      </FormControl>
    
  );
}