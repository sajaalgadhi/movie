import React, { Component } from 'react';
import './App.css';

class Books extends Component {
    state={
        hide:'hidden'
      }
      hideMeme=()=>{
        if(this.state.hide===false){
          this.setState({hide:'hidden'})
        }else{
          this.setState({hide:false})
        }
      }

  render() {
  

    return (
        <ul>
            <h2 onClick={this.hideMeme}> ISBN: {this.props.book.isbn}</h2>
            <h2  class={this.state.hide}> Title: {this.props.book.title}</h2>
            <h2  class={this.state.hide}> Subtitle: {this.props.book.subtitle}</h2>
            <h2 class={this.state.hide} >Author: {this.props.book.author}</h2>
            <h2  class={this.state.hide}> Published: {this.props.book.published}</h2>
            <h2  class={this.state.hide}> Publisher: {this.props.book.publisher}</h2>
            <h2  class={this.state.hide}>Pages: {this.props.book.pages}</h2>
            <h2  class={this.state.hide}> Description:{this.props.book.description}</h2>
            <a  class={this.state.hide} href={this.props.book.website}>READ HERE</a>
        </ul>
       
    );
  }
}

export default Books;