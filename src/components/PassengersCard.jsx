import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import PeopleIcon from '@mui/icons-material/People';
import { FormatAlignJustify } from '@mui/icons-material';
import { textAlign } from '@mui/system';
import { alignProperty } from '@mui/material/styles/cssUtils';

export const PassengersCard=({passengers})=> {
  return (
    <Card sx={{ minWidth: 250,maxWidth: 345, m:1}}>
      <CardHeader 
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} >
            <PeopleIcon/>
          </Avatar>
        }
        title="Passengers"
        subheader={passengers}
        titleTypographyProps={{variant:'h6', align:"center" }}
        subheaderTypographyProps={{variant:'h6', align:"center"  }}
        />
    </Card>
  );
}