import React, {Component} from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
 class MapContainer extends Component {
   
  render() {
    return (
      <div>
        <Map  containerStyle={{"width":"500px","height":"500px"}} google={this.props.google} zoom={3}>
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1></h1>
            </div>
        </InfoWindow>
      </Map>
      </div>
    
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyA8V9Xd3T0Ii-g1nFzHAzc1U-Sgv1TMRFQ")
})(MapContainer)