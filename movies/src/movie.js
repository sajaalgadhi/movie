
import React, { Component } from 'react';
import Review from './review' 
import Cast from './cast' 


class Movie extends Component {
  render() { 
    const castin= this.props.movie.cast;
    const actors = castin.map(actor => <Cast actor={actor} />);
    return (

<div>
      
    <h1>{this.props.movie.id}</h1>
    <h2>{this.props.movie.title}</h2>
    <img src={this.props.movie.poster}/><br/>
    <strong>{this.props.movie.rating}</strong><br/>
    <strong>{this.props.movie.description}</strong>
    <Review/> 
    <ul>{actors}</ul>
</div>

     
    );}
  
}

export default Movie;