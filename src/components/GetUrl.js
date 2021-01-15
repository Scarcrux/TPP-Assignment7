import React, { Component } from 'react';
import GetData from './GetData'
import { Button, Container, Row, Col, Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';

class GetUrl extends Component {

  state = {
    searchTerm: "",
    visibility: false,
    url: "",
    key: 0
  }

   handleClear = event => {
    event.preventDefault();
    this.setState(() => ({ searchTerm: "", visibility: false }));
   }

   handleEdit = event => {
    event.preventDefault();
    this.setState(() => ({ searchTerm: event.target.value}));
   };

   handleKeyUp = event => {
    event.preventDefault();
    if (event.key === "Enter") {
        this.setState(() => ({visibility: true, url: "https://api.giphy.com/v1/gifs/search?q="+this.state.searchTerm+"&api_key=221NG6q7QGn01ESd4y9DujrQAAQFzElH", key: this.state.key + 1}));
    }
  }

   handleSubmit = event => {
    event.preventDefault();
    this.setState(() => ({visibility: true, url: "https://api.giphy.com/v1/gifs/search?q="+this.state.searchTerm+"&api_key=221NG6q7QGn01ESd4y9DujrQAAQFzElH", key: this.state.key + 1}));
  };

  handleRandom = event => {
    event.preventDefault();
    this.setState(() => ({visibility: true, url: "https://api.giphy.com/v1/gifs/random?api_key=221NG6q7QGn01ESd4y9DujrQAAQFzElH", key: this.state.key + 1}));
  };

  render(){
  return (
    <div>
    <div className="mb-4">
      <Container>
      <Row className="d-flex justify-content-center my-4">
      <form className="form-horizontal" onSubmit={this.handleKeyUp}>
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>GIPHY</InputGroupText>
          </InputGroupAddon>
          <Input
            type="text"
            onChange={this.handleEdit}
            onKeyUp={this.handleKeyUp}
            value={this.state.searchTerm}
          />
        </InputGroup>
        </form>
        </Row>
        <Row className="d-flex justify-content-center">
        <InputGroup className="d-flex justify-content-center">
        <Button onClick={this.handleSubmit} className="btn btn-default update-btn">Search</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button onClick={this.handleRandom} className="btn btn-default update-btn">Random</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button onClick={this.handleClear} className="btn btn-default update-btn">Clear</Button>
        </InputGroup>
        </Row>
      </Container>
    </div>
    {this.state.visibility &&
      <GetData key={this.state.key} url={this.state.url}/>
    }
    {!this.state.visibility &&
      <GetData url={"https://api.giphy.com/v1/gifs/trending?api_key=221NG6q7QGn01ESd4y9DujrQAAQFzElH"} />
    }
    </div>
  );
  }
}

export default GetUrl;
