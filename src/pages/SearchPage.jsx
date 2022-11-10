import {useState} from 'react'
import {DestinationCitySelect} from '../components/DestinationCitySelect'
import {IntermediateCitySelect} from '../components/IntermediateCitySelect';
import { DatePicker } from "../components/DatePicker";
import {NumberOfPassengers} from '../components/NumberOfPassengers';
import {SearchButton} from '../components/SearchButton'
import {OriginCitySelect} from '../components/OriginCitySelect'
import dayjs from 'dayjs';






export const SearchPage = () => {
  const [origin, setOrigin] = useState('');
  const [intermediateCity, setintermediateCity] = useState([]);
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState(dayjs());
  const [passengers, setPassengers] = useState(1);
  const [originError, setOriginError] = useState(false);
  const [destinationError, setDestinationError] = useState(false);
  

  
  return (
    <>
     <h1 style={{textAlign:"center"}}>MozioApp</h1>
     <h2 style={{textAlign:"center"}}>Search</h2>
     <OriginCitySelect origin={origin} setOrigin={setOrigin} originError={originError} setOriginError={setOriginError}/>
     <IntermediateCitySelect intermediateCity={intermediateCity} setintermediateCity={setintermediateCity}/>
     <DestinationCitySelect destination={destination} setDestination={setDestination} destinationError={destinationError} setDestinationError={setDestinationError}/>
     <DatePicker date={date} setDate={setDate}/>
     <NumberOfPassengers passengers={passengers} setPassengers={setPassengers}/>
     <SearchButton 
        origin={origin} 
        intermediateCity={intermediateCity} 
        destination={destination} 
        date={date} 
        passengers={passengers} 
        originError={originError} 
        setOriginError={setOriginError}
        destinationError={destinationError} 
        setDestinationError={setDestinationError} 
      />
    </>
  )
}
