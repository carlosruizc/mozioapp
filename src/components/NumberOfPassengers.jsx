    
import {useState} from 'react'
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

export const NumberOfPassengers = ({passengers, setPassengers}) => {
    

    const handleChange = (event) => {
      setPassengers(event.target.value);
    };
    return (
      <FormControl sx={{ minWidth: 90, m:1, width:120 }}>
        <TextField
            type="number"
            name="passengers"
            label="Passengers"
            InputProps={{ inputProps: { min: 1} }}
            value={passengers}
            onChange={handleChange}
        />
      </FormControl>
  )
}

    