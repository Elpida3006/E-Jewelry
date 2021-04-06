import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '800px',
  height: '400px'
};

 class GoogleMap extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 42.6573717,
            lng: 23.3842959
          }
        }
      />
    );
  }
}

// export default GoogleMap;

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCor2Qm3vbFqbfcqCzl29fEy1TCFA-Dlqs'
//  'AIzaSyCor2Qm3vbFqbfcqCzl29fEy1TCFA-Dlqs'
//'AIzaSyAzYzR3kbMLdQBIc_pLz3npNvyPuRgfHmg'
})(GoogleMap);