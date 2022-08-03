import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

class BasicExample extends React.Component {
    render(){
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>day</th>
          <th>description</th>
        </tr>
      </thead>
      <tbody>
       <tr>
        <td>{this.props.index}</td>
        <td>{this.props.date}</td>
        <td>{this.props.description}</td>
       </tr>
        
      </tbody>
    </Table>
  );
}
}

export default BasicExample;