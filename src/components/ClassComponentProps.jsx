import React, { Component } from "react";
import "../App.css";


export default class ClassComponentProps extends Component {
  constructor(props) {
    super(props);
    this.state = { fruit: ["bananas", "kiwis", "oranges", "grapefruits"], newFruit: "" };
    this.addFruit = this.addFruit.bind(this);
  }

  updateFruit = (e)=> {
    this.setState(
      {newFruit: e.target.value}
    )
  }

  addFruit = (e) => {
    e.preventDefault();
    this.setState({
      fruit: [...this.state.fruit, this.state.newFruit], newFruit: "",
    });
  }

  render () {
    return (
        <div className="main">
            <div className="mainDiv">
                <form>
                    <input
                        type="text"
                        value={this.state.newFruit}
                        placeholder="Enter fruit here"
                        onChange={(e) => this.updateFruit(e)}
                    />
                    <button type="submit" onClick={this.addFruit}>
                        Add Fruit
                    </button>
                </form>
                <FruitBowl fruits={this.state.fruit} />
            </div>
        </div>
    );
  }
}

class FruitBowl extends Component {
  render () {
    return(
      <div>
        {this.props.fruits.map((fruit) => {
          return <Fruit passingFruit={fruit} />
        })}
        </div>
    );
  }
}

const Fruit = (props) => {
  return (
    <div>
      <h3>{props.passingFruit}</h3>
    </div>
  );
};