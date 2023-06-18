import React from 'react';

function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

export default class GeoLocation extends React.Component {
    constructor() {
        super();
        this.state = {
            latitude: 0.0,
            longitude: 0.0,
            accuracy: 0.0
        };
        this.success = this.success.bind(this);
        this.getLocation = this.getLocation.bind(this);
    }

    success(pos) {
        this.setState({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
            accuracy: pos.coords.accuracy
        })
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.permissions
                .query({name: "geolocation"})
                .then(result => {
                    if (result.state === "granted") {
                        console.log(result.state);
                        navigator.geolocation.getCurrentPosition(this.success);
                    } else if (result.state === "prompt") {
                        console.log("Prompt");
                        navigator.geolocation.getCurrentPosition(this.success, errors);
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
            <div>
                <h2>GeoLocation</h2>
                <button onClick={this.getLocation}>Get Location</button>
                <p>{this.state.latitude}&deg;, {this.state.longitude}&deg; (&plusmn; {this.state.accuracy})</p>
            </div>
        )
    }
}