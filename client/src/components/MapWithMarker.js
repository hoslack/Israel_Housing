import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
const defaultCenter = { lat: 31.771959, lng: 35.217018 }; //Coordinates for Jerusalem, the centre of Israel.

const MapWithMarker = withGoogleMap(props => (
  <GoogleMap defaultZoom={8} defaultCenter={defaultCenter}>
    {props.markers &&
      props.markers.map((marker, index) => {
        return <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />;
      })}
  </GoogleMap>
));

export default MapWithMarker;