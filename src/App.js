import React, { Component } from "react";
import './App.css';
import CodeRow from './CodeRow.js';
import $ from 'jquery'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.performSearch("")

  }


  performSearch(searchTerm) {
    console.log("Performing search")
    let urlString = "http://ctp-zip-api.herokuapp.com/zip/" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("fetched data successfully")
        console.log(searchResults)
        let results = searchResults
        

        var zipcodeRows = []
        results.map((zipcode) => {
          const zipcodeRow = <CodeRow codes={zipcode}/>
          zipcodeRows.push(zipcodeRow)
        });

        this.setState({rows: zipcodeRows})

      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }

    })

  }

  searchChangeHandler(event) {
    const searchCode = event.target.value
    const boundObject = this
    boundObject.performSearch(searchCode)
  }

  render() {
    return (
      <div className="App">
        <div className = "App-header">
          <h2>Zip Code Search</h2>
        </div>
        <input style={{fontSize: 24, width: "40%", paddingTop: 8, paddingBottom: 8, paddingLeft: 10}}
        onChange={this.searchChangeHandler.bind(this)} placeholder="Enter a Zipcode"/>


        {this.state.rows}

      </div>
    );
  }
}


export default App;
