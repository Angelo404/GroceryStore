import React, { Component } from 'react';
import Components from './Components';

class GroceryList extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div  class="row mt-3" id="accordion">
          {this.props.list.map(block => Components(block))}
      </div>
      );
    }
}

export default GroceryList;