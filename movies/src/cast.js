import React, { Component } from 'react';
import Movies from "./movie";


class Cast extends Component {
  render() {

    
    return (
     
      <div>
    
      <li>{this.props.movie.cast.name}:{this.props.movie.cast.role}</li>
      <movie/>
      </div>
       
     
      );




     
    
    } 
}

export default Cast;