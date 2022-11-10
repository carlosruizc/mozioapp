import {getDistanceCalculation} from './Functions/getDistanceCalculation'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Card, CardContent, Typography } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import RouteIcon from '@mui/icons-material/Route';
import haversine from "haversine-distance";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  

export const PathCalculatedCard = ({cities}) => {
  
  let rows=[]
  let total=0
  let singleRow={}
  if (cities.length>2){
    try {rows = 
      getDistanceCalculation(cities)
    } catch (e){
      console.error(e)
    }
    total=Math.round(rows.reduce((accumulator, object)=>{
      return accumulator+object.distance
    },0))
  } else {
    const origin = [cities[0][2], cities[0][1]];
    const destination = [cities[1][2], cities[1][1]];
    const distance=haversine(origin, destination) / 1000
    total=Math.round(distance)
    singleRow.originCity=cities[0]
    singleRow.destinationCity=cities[1]
    singleRow.distance=total
    rows.push(singleRow)
  }

  return (
        <>
            <Card sx={{ m:1 }}>
                <CardHeader
                    avatar={
                    <Avatar sx={{ bgcolor: red[500] }} >
                        <RouteIcon/>
                    </Avatar>
                    }
                    title="Route"
                    titleTypographyProps={{variant:'h6' }}
                />
                <CardContent>
                    
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">No</StyledTableCell>
                                <StyledTableCell align="center">From</StyledTableCell>
                                <StyledTableCell align="center">To</StyledTableCell>
                                <StyledTableCell align="center">Distance (km)</StyledTableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row, index) => (
                                <StyledTableRow key={row.originCity[0]}>
                                    <StyledTableCell align="center">{index}</StyledTableCell>                   
                                    <StyledTableCell component="th" scope="row" align="center">
                                        {row.originCity[0]}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.destinationCity[0]}</StyledTableCell>
                                    <StyledTableCell align="center">{Math.round(row.distance)}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                            <StyledTableRow key={"total"} >
                                <StyledTableCell align="right" colSpan={3} sx={{color:"red", fontWeight:"bold"}}>Total</StyledTableCell>
                                <StyledTableCell align="center" sx={{color:"red", fontWeight:"bold"}}>{total}</StyledTableCell>
                            </StyledTableRow>
                            </TableBody>
                        </Table>
                        </TableContainer>
                </CardContent>
            </Card>
            
        </>
        
      );
}
