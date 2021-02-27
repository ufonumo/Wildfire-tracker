import {useState, useEffect} from 'react'
import GoogleMapReact from 'google-map-react'
import { LocationMarker } from './LocationMarker';
import { LocationInfoBox } from './LocationInfoBox';


const Map = ({ eventData, center, zoom}) => {
    const api_key = 'AIzaSyACrSn2JIhIBUixMpIM2Sj4Q9yWDn8QHOg';

    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map(ev => {
        if(ev.categories[0].id === 8){
            return  <LocationMarker lat={ev.geometries[0].coordinates[1]} 
            lng={ev.geometries[0].coordinates[0]}
            onClick={() => setLocationInfo({id: ev.id, title: ev.title})}/>

        }
        return null
    })
    return (
        <div className='map'>
            <h2>TRACK WILDFIRES ALL OVER THE WORLD</h2>
            <GoogleMapReact
                bootstrapURLKeys={{ key: api_key }}
                defaultCenter={center}
                defaultZoom={zoom}
                >                
                {markers}

                {locationInfo && <LocationInfoBox info={locationInfo}/> }

            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center:{
        lat:  36.36024,
        lng: 139.44326
    },
    zoom: 6
}

export default Map;

