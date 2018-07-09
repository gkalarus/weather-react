import React from 'react';

const Weather = props => (
    <div>
        { props.isSent && <h1>Location: {props.cityAPI}, {props.countryAPI}</h1> }
        { props.isSent && <p>Temperature: {props.temperature}</p> }
        { props.isSent && <p>Humidity: {props.humidity}%</p> }
        { props.isSent && <p>Description: {props.description}</p> }
        { props.error && <p>{props.error}</p> }
    </div>
) 

export default Weather;