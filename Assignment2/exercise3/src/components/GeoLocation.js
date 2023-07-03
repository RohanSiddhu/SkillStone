import React from 'react';

const OPTIONS = {
  enableHighAccuracy: true,
};

function errors(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

class GeoLocation extends React.Component {
  state = {
    latitude: 0.0,
    longitude: 0.0,
    altitude: 0.0,
    accuracy: 0.0,
    speed: 0.0,
    direction: 0.0,
  };

  success = (pos) => {
    this.setState({
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude,
      altitude: pos.coords.altitude,
      accuracy: pos.coords.accuracy,
      speed: pos.coords.speed,
      direction: pos.coords.direction,
    })
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.permissions
        .query({name: "geolocation"})
        .then(result => {
          if (result.state === "granted") {
            console.log(result.state);
            navigator.geolocation.getCurrentPosition(this.success, errors, OPTIONS);
          } else if (result.state === "prompt") {
            console.log("Prompt");
            navigator.geolocation.getCurrentPosition(this.success, errors, OPTIONS);
          } else if (result.state === "denied") {
            console.log("Denied");
          }
          result.onchange = () => {
            console.log(result.state);
          }
        });
    } else {
      alert("Sorry not available!!");
    }
  }

  render() {
    return (
      <div className={"location-info"} style={{width: "fit-content", margin: "auto"}}>
        <h2>GeoLocation</h2>
        <p>Latitude: {this.state.latitude}&deg;</p>
        <p>Longitude: {this.state.longitude}&deg;</p>
        <p>Altitude: {this.state.altitude}</p>
        <p>Accuracy: &plusmn; {this.state.accuracy}m</p>
        <p>Speed: {this.state.speed}</p>
        <p>Direction: {this.state.direction}</p>
      </div>
    )
  }
}

export default GeoLocation;
