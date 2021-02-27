import Map from './components/Map';
import {useState, useEffect} from 'react'
import Spinner from './assets/Double Ring-1s-200px.gif'

function App() {

  const [eventData, setEventData] = useState([]);
  const [loading, setloading] = useState(false)

  useEffect(() =>{
    const fetchEvents = async  () =>{
      setloading(true)
      const resp = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events} = await resp.json()

      setEventData(events);
      setloading(false)
    }

    fetchEvents()

  }, [])


  return (
    <div className="App">
      { !loading ? <Map eventData={eventData} /> : <img className='spinner' alt='spinner' src={Spinner}/>} 
    </div>
  );
}

export default App;
