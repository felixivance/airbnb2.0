import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

function Map({searchResults}) {

    const [selectedLocation, setSelectedLocation ]= useState({}) ;

        //transform search results into the required format

        const cordinates = searchResults.map((item)=>({
            longitude:item.long,
            latitude:item.lat
        }));
        //get center of the cordinates
        const center = getCenter(cordinates);

        const [viewport, setViewport] = useState({
            latitude: center.longitude,
            longitude: center.latitude,
            zoom: 8,
            width:"100%",
            height:"100%"
        });
        
    return <ReactMapGL 
    mapStyle="mapbox://styles/felixivance/ckt2jw2qc22g218s0qm5shc1l"
            mapboxApiAccessToken={process.env.mapbox_key}
               {...viewport}
             onViewportChange={(viewport) => setViewport(viewport)}
      >
          {searchResults.map((result,key)=> (
                <div key={key}>
                    <Marker longitude={result.long} latitude={result.lat} offsetLeft={-20}
                    offsetTop={-10} >
                        <p onClick={ ()=>{ setSelectedLocation(result)} } className="cursor-pointer text-2xl animate-bounce">📌</p>
                    </Marker>

                    {/* // popup that should show if marker is clicked */}
                    {selectedLocation.long === result.long ? (
                        <Popup closeOnClick={true}
                        onClose={()=> setSelectedLocation({}) }
                        longitude={result.long}
                        latitude={result.lat}
                        > {result.title} </Popup>
                    ): ''}
                </div>
               

           ))}

    </ReactMapGL>;
}

export default Map
