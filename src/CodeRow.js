import React, { Component } from "react";
import './CodeRow.css';



class CodeRow extends Component {
  render() {
    const codeRow = <li key={this.props.codes.RecordNumber}><h3>City: {this.props.codes.City}</h3><h4>State: {this.props.codes.State}</h4><h4>Estimated Population: {this.props.codes.EstimatedPopulation}</h4></li>
    return (
      <div>{codeRow}</div>
    ); 
  }
}



export default CodeRow