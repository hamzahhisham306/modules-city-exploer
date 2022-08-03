import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Table from './Table';
import Card from './Card'
import Error from './Error';
import Movies from './Movies';
import Weather from './Weathe';

class  BasicExample extends React.Component{
    constructor(props){
        super(props);
        this.state={
            city:"",
            lat:"",
            long:"",
            Name:"",
            error:"",
            urlImage:"",
            errorImage:"",
            show:false,
            ArrayMovie:[],
            arrayWeather:[],
        }
        

    }
    handleChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value,
        });
    }

    handeSubmit=(event)=>{
        event.preventDefault();
        const city = this.state.city;
        const url = `https://us1.locationiq.com/v1/search.php?key=pk.b4a103b455cdd4e565619a9d076612ae&q=${city}&format=json`;
        const urlMap=`https://maps.locationiq.com/v3/staticmap?key=pk.b4a103b455cdd4e565619a9d076612ae&center=${this.state.lat},${this.state.long}&zoom=10`;
        const urlMovie=`https://backend301s.herokuapp.com/movies?searchQuery=${city}`;
        
        axios.get(urlMap).then((res)=>{
            console.log(res.config.url)
            const urlImage=res.config.url;
            this.setState({
                urlImage:urlImage,
            })
        }).catch((error)=>{
            this.setState({
                errorImage:error.message
            });
        });
        axios.get(urlMovie).then((res)=>{
            this.setState({
                ArrayMovie:res.data
            });
            console.log('move',res.data);
        }).catch((error)=>{
            this.setState({
                error:error.message,
            })
        })
        
           axios.get(url).then((res)=>{
            const lat=res.data[0].lat;
            const long=res.data[0].lon;
            const Name=res.data[0].display_name;
            this.weather(lat,long)
            this.setState({
                lat:lat,
                long:long,
                Name:Name,
                show:true
            })
        }).catch((error)=>{
            console.log(error)
            this.setState({
                error:error.message,
                
            });
        });
    }
        weather = async (lat,lon) => {        
               let url1 =`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=d4b28539a2b24563a94b4a3d14d3d37f`;
               await axios.get(url1).then((res)=>{
                this.setState({
                    arrayWeather:res.data.data
                })
               })
            
               
        
              
        
          }

  

   





  render(){
    
  return (
    <>
       <>
        <Form>
          <Form.Group>
            <Form.Label>Enter a Name </Form.Label>
            <Form.Control type="text" name="city" placeholder='Enter city Name' onChange={this.handleChange}/>
          </Form.Group>
          <br/>
          <Button variant="primary" type="submit" onClick={this.handeSubmit} >
            Explore!
          </Button> <br/><br/>
          <Form.Label>Please Double Click on button Explor! to show Image </Form.Label>

        </Form>
        {this.state.error&& 
     <Error error={this.state.error}
     />
    }
     <div className='content-table1'>
      <Table name={this.state.Name} long={this.state.long} lat={this.state.lat} urlImage={this.state.urlImage}/>
     {this.state.show
      && <Card  name={this.state.Name} long={this.state.long} lat={this.state.lat} urlImage={this.state.urlImage}/>
     }
     <div className='boxs'>
     {this.state.ArrayMovie.map((move ,index)=>{
            return <Movies title={move.title} key={index} overview={move.overview} image_url={move.image_url} average_votes={move.average_votes} total_votes={move.total_votes} release_date={move.release_date}/>
        })}
    </div>
         {this.state.arrayWeather.map((move ,index)=>{
            return <Weather index={index} date={move.valid_date} key={index} description={move.weather.description}/>
        })}
     </div>
      </>
      </>
  );


}
}
export default BasicExample;

