
import React, { Component } from 'react'
import {Container,Row,Col,Button} from 'reactstrap'
import Celcius from './Celcius'
import Fahrenheit from './Fahrenheit'
import Kelvin from './Kelvin'
export default class App extends Component {
  constructor(props) {
  super(props)
  this.state={
    sicaklik:1
  }
  }
  sicaklikArttir=()=>{
    this.setState({sicaklik:this.state.sicaklik+1})
  }
  sicaklikAzalt=()=>{
    this.setState({sicaklik:this.state.sicaklik-1})
  }
  render() {
    return (
      <div>
        <Container>
          <h1>Hava Durumu</h1>
          <h4>Anlik Sicaklik:{this.state.sicaklik} derece</h4>
          <div>
            <Button onClick={this.sicaklikArttir} color='primary'>Sicaklik artişi</Button>
            <Button onClick={this.sicaklikAzalt} color='danger'>Sicakliği Azalt</Button>
            <h5>3 birimde sicaklik degerleri</h5>
            <Row>
              <Col xs='4'>
                <Celcius info={this.state.sicaklik}></Celcius>
              </Col>
              <Col xs='4'>
                <Fahrenheit info={this.state.sicaklik}></Fahrenheit>
              </Col>
              <Col xs='4'>
                <Kelvin info={this.state.sicaklik}></Kelvin>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

    )
  }
}




