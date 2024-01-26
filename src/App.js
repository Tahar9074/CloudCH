// src/App.js

import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import styled from 'styled-components';

const MapContainer = styled.div`
  height: 500px;
  width: 80%;
  margin: auto;
  margin-top: 50px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

class App extends React.Component {
  render() {
    const mapStyles = {
      width: '100%',
      height: '100%',
    };

    return (
      <MapContainer>
        <Map
          google={this.props.google}
          zoom={10}
          style={mapStyles}
          initialCenter={{ lat: 37.7749, lng: -122.4194 }}
        >
          <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
        </Map>
      </MapContainer>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(App);

export default App;
