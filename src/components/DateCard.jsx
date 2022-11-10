import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import DateIcon from '@mui/icons-material/CalendarToday';

export const DateCard=({date})=> {
  return (
    <Card sx={{ minWidth: 250,maxWidth: 345, m:1}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} >
            <DateIcon/>
          </Avatar>
        }
        title="Date"
        subheader={date}
        titleTypographyProps={{variant:'h6' , align:"center" }}
        subheaderTypographyProps={{variant:'h6', align:"center"  }}
        />
    </Card>
  );
}