import {useEffect,useState} from 'react'
import { DateCard } from "../components/DateCard";
import { PassengersCard } from "../components/PassengersCard";
import { PathCalculatedCard } from "../components/PathCalculatedCard";
import {useSearchParams} from 'react-router-dom';
import data from '../data/data.js'
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Spinner from '../components/Functions/Spinner';




export const ResultsPage = () => {
  
  

  const [searchParams]=useSearchParams()
  const origin=searchParams.get("origin")
  const destination = searchParams.getAll("destination")
  const intermediate=searchParams.getAll("intermediateCity")
  const date = searchParams.get("date").toString().slice(0,-13)
  const passengers = searchParams.get("passengers")
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
        setIsLoading(false)
      }, 3000);
    return () => {
      
    };
  }, []);

  
  
  const citiesSelected=[]
  citiesSelected.push([origin])
  for (let i=0;i<intermediate.length;i++){
    citiesSelected.push([intermediate[i]])
  }
  citiesSelected.push(destination)
  
  let searchDataIndex=""
  let cities=[]
  for (let i=0;i<citiesSelected.length;i++){
    
    searchDataIndex=data.findIndex(element=>element[0]===citiesSelected[i][0])
    cities.push(data[searchDataIndex])
    
  }
  
   
  return (
    
      isLoading
      ?
      <div ><Spinner/></div>
      :
      (  
      <> 
          
          <h1 style={{diplay:"flex", textAlign:"center"}}>MozioApp</h1>
          <h2 style={{diplay:"flex", textAlign:"center"}}>Results</h2>
          <div style={{display:"flex", justifyContent:"center"}}>
            <DateCard date={date}/>
            <PassengersCard passengers={passengers}/>
          </div>
          <PathCalculatedCard cities={cities}/>)
          </>
      )
    
  )
}
