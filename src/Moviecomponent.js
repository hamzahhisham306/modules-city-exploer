import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

class  BasicExample extends React.Component {
    render(){
  return (

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" alt="Not Found image in Api" src={`https://image.tmdb.org/t/p/w500/${this.props.image_url}`}/>
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
          {this.props.overview}
        </Card.Text>
        <Card.Text>
        average_votes :{this.props.average_votes}
        <br/>
        total_votes:{this.props.total_votes}
        <br/>
        release_date: {this.props.release_date};
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
}
export default BasicExample;