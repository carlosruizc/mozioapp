import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { FormControl } from '@mui/material';
import dayjs from 'dayjs';


export const DatePicker = ({date, setDate}) => {
    
    
    const handleChange = (newValue) => {
      setDate(newValue);
    };
  
    return (
      <FormControl sx={{ minWidth: 150, m:1, width:150 }}>
        <LocalizationProvider  dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
                label="Date"
                inputFormat="DD-MM-YYYY"
                value={date}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
                minDate={dayjs()}
                
            />
        </LocalizationProvider>
      </FormControl>
    );
  }
  
