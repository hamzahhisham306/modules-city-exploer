import React from 'react';
import Moviecomponent from './Moviecomponent';

class  BasicExample extends React.Component {
    render(){
  return (
   <Moviecomponent 
    average_votes={this.props.average_votes}
    title={this.props.title} 
    image_url={this.props.image_url}
    overview= {this.props.overview}
    release_date={this.props.release_date}
    total_votes={this.props.total_votes}
   />
  
  );
}
}
export default BasicExample;