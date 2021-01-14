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
        this.setState(() => ({visibility: true, url: "http://api.giphy.com/v1/gifs/search?q="+this.state.searchTerm+"&api_key=221NG6q7QGn01ESd4y9DujrQAAQFzElH", key: this.state.key+1}));
    }
  }

   handleSubmit = event => {
    event.preventDefault();
    this.setState(() => ({visibility: true, url: "http://api.giphy.com/v1/gifs/search?q="+this.state.searchTerm+"&api_key=221NG6q7QGn01ESd4y9DujrQAAQFzElH", key: this.state.key+1}));
  };

  handleRandom = event => {
    event.preventDefault();
    this.setState(() => ({visibility: true, url: "http://api.giphy.com/v1/gifs/random?api_key=221NG6q7QGn01ESd4y9DujrQAAQFzElH", key: this.state.key+1}));
  };

  render(){
  return (
    <div>
    <div className="mb-4">
      <div>
      <form className="form-horizontal" onSubmit={this.handleKeyUp}>
      <div className="form-group mt-3">
        <InputGroup>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Gif</InputGroupText>
          </InputGroupAddon>
          <Input
            type="text"
            onChange={this.handleEdit}
            onKeyUp={this.handleKeyUp}
            value={this.state.searchTerm}
          />
        </InputGroup>
        </div>
        <div>
        <InputGroup>
        <Button onClick={this.handleSubmit} className="btn btn-default update-btn">Search</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button onClick={this.handleRandom} className="btn btn-default update-btn">Random</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Button onClick={this.handleClear} className="btn btn-default update-btn">Clear</Button>
        </InputGroup>
        </div>
        </form>
      </div>
    </div>
    {this.state.visibility &&
      <GetData key={this.state.key} url={this.state.url}/>
    }
    {!this.state.visibility &&
      <GetData url={"http://api.giphy.com/v1/gifs/trending?api_key=221NG6q7QGn01ESd4y9DujrQAAQFzElH"} />
    }
    </div>
  );
  }
}

export default GetUrl;
