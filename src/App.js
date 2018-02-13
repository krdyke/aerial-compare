import React, { Component } from 'react';
import logo from './logo.svg';
import MapView from './MapView';
import ViewBar from './ViewBar';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.state = {"layers":[]};
  }


  handleItemClick(data) {
    var found = false;
    var newState;
    this.state.layers.forEach(function(lyr, index){
      if (data.id === lyr.id)
        found = [true,index];
    });

    if (!found){
      this.setState({"layers": this.state.layers.concat([data])});
    }
    else {
      newState = this.state.layers[found[1]] = data;
      this.setState(newState);

    }
  }


  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          Stillwater Aerials
        </header>
        <MapView layers={this.state.layers} />
        <ViewBar onItemClick={this.handleItemClick} />
      </div>
    );
  }
}

export default App;
