import React, { Component } from "react";
import { AiTwotoneDislike, AiTwotoneLike } from "react-icons/ai";

export default class ClassComponentDemo extends Component {
    constructor(props) {
      super(props);
      this.state = { likes: 0, dislikes: 0 };
    }
    
    incrementCount = () => {
      this.setState(
        { likes: this.state.likes + 1 }
      );
    };

    decrementCount = () => {
      this.setState(
        { dislikes: this.state.dislikes - 1 }
      )
    }

  render() {
    return (
        <div className="main">
            <div className="mainDiv">
                <ClassComponentNotes />
                <hr />
                <h3>Smash that like button!</h3>
                <button onClick={this.incrementCount}>
                  <AiTwotoneLike />
                    Likes: {this.state.likes}
                </button>
                <button onClick={this.decrementCount}>
                  <AiTwotoneDislike />
                    Dislkes: {this.state.dislikes}
                </button>
            </div>
        </div>
    );
  }
}

const ClassComponentNotes = function () {
  return ( 
    <div >
      <h1>Class Components</h1>

      <p>Class components are considered the "React way" of writing components.</p>
      <dl>
        <dt>ES6 JS Classes</dt>
        <dd>Built on these, must understand them</dd>
        <dt>must extend Component</dt>
        <dd>Class components need to extend the React component.</dd>
        <dt>render()</dt>
        <dd>Class components must always have a render method.</dd>
        <dt>export</dt>
        <dd>Only one class component exported per file.</dd>
      </dl>
    </div>
  )
}