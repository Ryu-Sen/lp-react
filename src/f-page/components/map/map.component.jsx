import React, {Component} from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const locations = [
  {location:{lat: 21.2770975, lng: -157.7885631},name:"Hawai Office"},
  {location:{lat: 35.6466522, lng: 139.7465246},name:"Global Head Office"},
  {location:{lat: 1.2742974, lng: 103.8015293},name:"Singapore Office"},
  {location:{lat: 14.5480872, lng: 121.0485357},name:"Philipine Office"},
  {location:{lat: 22.2830693, lng: 114.154953},name:"Hong Kong Office"},
  {location:{lat: 13.7460168, lng: 100.5386818},name:"Thailand Office"},
]
 class MapContainer extends Component {
   
  render() {
    return (
      <div>
        <Map  containerStyle={{"width":"500px","height":"500px"}} google={this.props.google} zoom={3}  initialCenter={{
            lat: 35.6466522,
            lng: 139.7465246
          }}>
          {
            locations.map((office, index)=>{
              return (
                <Marker onClick={this.onMarkerClick}
                  key={index}
                  title={office.name}
                   name={office.name}
                   position={office.location} />
              )
            })
          }
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>Offices</h1>
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