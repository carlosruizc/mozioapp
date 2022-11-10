import {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import data from '../data/data.js'
import ListItemText from "@mui/material/ListItemText";
import FormHelperText from '@mui/material/FormHelperText';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

let sortedData = data.sort();


export const OriginCitySelect = ({origin, setOrigin, originError, setOriginError}) => {
    
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
      setOrigin(event.target.value);         
    };

    const open=() => {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 3000);
    }
  
    return (
    
      <FormControl sx={{ minWidth: 120, m: 1, width:300 }} required>
        <InputLabel id="origin-select-label">City of Origin</InputLabel>
        <Select
          defaultValue=""
          labelId="origin-select-label"
          id="origin-select"
          value={origin}
          label="City of Origin"
          onChange={handleChange}
          error={originError}
          onOpen={open}
        >     
          {isLoading 
          ? 
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ ml:2, mr: 2 }}>
              <CircularProgress size={20} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography >
                Loading...
              </Typography>
            </Box>
          </Box>
            
          :
          (sortedData.map((city, index) =>
            <MenuItem key={index} value={city[0]}>
              <ListItemText primary={city[0]} />
            </MenuItem>
          ))} 
         
        </Select>
        {originError ? <FormHelperText>Origin required</FormHelperText>: null}
      </FormControl>
    
  )
}

data.map((city, index) =>
            <MenuItem key={index} value={city[0]}>
              <ListItemText primary={city[0]} />
            </MenuItem>
          )