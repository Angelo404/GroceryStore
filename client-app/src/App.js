import './App.css';
import React, {Component} from "react";
import { Home, GroceryList } from "./components";

class App extends Component {
  constructor(props) {
      super(props);
      this.state={
        groceryList: []
      };
  }

  callbackFunction = (data) => {
    this.stateHandler(data)
  };

  stateHandler(nextProps){
    this.setState({
     groceryList: nextProps
    })}


  render() {
    return (
      <div className="App">
        
        <Home parentCallback = {this.callbackFunction}/>
        <GroceryList list={this.state.groceryList}/>
        
      </div>
    )
  }
}

export default App;
