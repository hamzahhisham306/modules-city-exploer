import React from 'react';
import WearherDay from './WeatherDay';
class Weather extends React.Component {
    render(){
  return (
    <WearherDay index={this.props.index} date={this.props.date} description={this.props.description}/>
  );
}
}

export default Weather;