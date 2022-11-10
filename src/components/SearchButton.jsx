import {useState} from 'react'
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import {createSearchParams, useNavigate} from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';



export const SearchButton=({origin, intermediateCity, destination, date, passengers, originError, setOriginError, destinationError, setDestinationError}) => {
    
    

 

    const navigate=useNavigate()
    const params={origin, destination, intermediateCity, date, passengers}
    
    const handleSearch = () => {
      if (origin === "") {
        if (destination === "") {
          setDestinationError(true);
          setOriginError(true);
          return;
        }
        setOriginError(true);
        return;
      }
      if (destination === "") {
        if (origin === "") {
          setDestinationError(true);
          setOriginError(true);
          return;
        }
        setDestinationError(true);
        return;
      }
      setOriginError(false);
      setDestinationError(false);

    
      navigate({
        pathname:"/results",
        search:`?${createSearchParams(params)}`,
        state:{
          origin,
          intermediateCity, 
          destination, 
          date, 
          passengers
        }
      })
      };
  
  return (    
    <Box sx={{display:"inline-flex", m:1,alignItems:"center"}}>
        <Button
            sx={{ minWidth: 120, m: 1, maxwidth:300 }}
            variant="contained"
            
            component="label"
            onClick={handleSearch}
        >
            SEARCH
        </Button>
  
    </Box>
  )
    
}