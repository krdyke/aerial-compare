import React, { Component } from 'react';
import Config from './Config';
import './Item.css';

class Item extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {isToggledOn: false,
                  opacity: 1.0};
  }
 
  onClick(e) {

    let numLyrs = this.props.numberOfLayersOn;

  
    if (numLyrs === Config.maxLayers) {
      if (!this.state.isToggledOn){
        window.vex.dialog.alert(Config.maxLayersWarning.replace("{maxLayers}", Config.maxLayers));
        return
      }
    }

    this.setState(prevState => ({
      isToggledOn: !prevState.isToggledOn,
      opacity: 1.0
    }));


    let props = {
      "opacity": 1.0,
      ...this.props
    };
    delete(props.onItemClick);
    delete(props.isToggledOn);   
    props.isToggledOn = !this.state.isToggledOn;
    
    this.props.onItemClick(props);



    //   "sortVal": this.props.sortVal,
    //   "id": this.props.id,
    //   "thumbnail_file": this.props.thumbnail_file,
    //   "url": this.props.url,
    //   "type": this.props.type,
    //   "layers": this.props.layers,
    //   "maxZoom": this.props.maxZoom,
    //   "display_name": this.props.display_name

  }

  render() {
    let dispName = this.props.display_name;
    return (
      <button className={this.state.isToggledOn ? 'item on' : 'item off'} 
          onClick={this.onClick} 
          style={{backgroundImage: "url('assets/images/" + this.props.thumbnail_file + "')"}}
          id={this.props.id}>
        <div className="label">
          {dispName.length >= 40 ? dispName.slice(0,dispName.slice(0,41).lastIndexOf(" "))+"..." : dispName}
        </div>

        <div className="button">

        </div>
      </button>
    );
  }
}

export default Item;
