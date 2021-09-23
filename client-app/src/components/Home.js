import React, {Component} from "react";
import axios from "axios";

class Home extends Component {

  props;
  constructor(props) {
    super(props);
    this.props = props;
  }

  handleOnInputChange = (event) => {
    this.fetchSearchResults(event.target.value);
  };

  fetchSearchResults = (searchString) => {
    console.log('fetchSearchResults');
    const searchUrl = `http://localhost:8080\\hello\\${searchString}`;
    axios.get(searchUrl, { crossDomain: true })
   .then(response => {
      this.props.parentCallback(response.data);
    })
   .catch((error) => {
       console.log('error ' + error);
    });
  };

  render() {
    return (
      <div className="home" class="row mt-5">
        <div class="col-md-8 offset-md-2">
        <div class="searchbar">
            <input onChange={this.handleOnInputChange} class="search_input" type="text" name="" placeholder="Search..."/>
          </div>
        </div>
      </div>
    );
    }
}

export default Home;
