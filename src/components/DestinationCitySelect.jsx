import {useState} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListItemText from "@mui/material/ListItemText";
import data from '../data/data.js'
import FormHelperText from '@mui/material/FormHelperText';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';


let sortedData = data.sort();


export const DestinationCitySelect = ({destination, setDestination, destinationError, setdestinationError}) => {
    
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (event) => {
      setDestination(event.target.value);
    };
    
    const open=() => {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 3000);
    }
    return (
    
      <FormControl sx={{ minWidth: 120, m: 1, width:300 }} required >
        <InputLabel id="destination-select-label">City of Destination</InputLabel>
        <Select
          defaultValue="" 
          labelId="destination-select-label"
          id="destination-select"
          value={destination}
          label="City of Destination"
          onChange={handleChange}
          error={destinationError}
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
        {destinationError ? <FormHelperText>Destination required</FormHelperText>: null}
        
      </FormControl>
    
  )
}
