import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = '3ae37b01f744c61924df9383e56d2177';

class App extends React.Component {
  
  state = {
    city: '',
    country: '',
    cityAPI: undefined,
    countryAPI: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    isSent: false
  }

  onFormFieldChange = (field, event) => {
    const value = event.target.value;
    this.setState({
      [field]: value
    })
  }

  getWeather = async (e) => {
    e.preventDefault();

    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&appid=${API_KEY}&units=metric`);

    const data = await api_call.json();

    console.log(data);
    
    if(this.state.city && this.state.country) {
      this.setState({
        cityAPI: data.name,
        countryAPI: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        isSent: true,
        error: undefined
      })
    } else {
      this.setState({
        error: 'Please enter the value'
      })
    }


  }

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} 
              city={this.state.city}
              country={this.state.country}
              onFormFieldChange={this.onFormFieldChange}
        />
        <Weather temperature={this.state.temperature}
                 cityAPI={this.state.cityAPI}
                 countryAPI={this.state.countryAPI}
                 humidity={this.state.humidity}
                 description={this.state.description}
                 error={this.state.error}
                 isSent={this.state.isSent}
        />
      </div>
    );
  }
}

export default App