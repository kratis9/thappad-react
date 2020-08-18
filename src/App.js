import React from "react";
import "./styles.css";

class Mumma extends React.Component {
  constructor(props) {
    super(props);
    this.childInDanger = this.childInDanger.bind(this);
  }

  childInDanger(reason) {
    console.log(reason);
  }

  render() {
    return (
      <>
        <h1>{this.props.message}</h1>
        <Mittu onHurt={this.childInDanger} />
      </>
    );
  }
}

class Mittu extends React.Component {
  constructor(props) {
    super(props);
    this.handleHurt = this.handleHurt.bind(this);
  }
  handleHurt() {
    this.props.onHurt("tappad");
  }

  render() {
    return <h1 onClick={this.handleHurt}>Hey i am mittu</h1>;
  }
}

export default function App() {
  return (
    <div className="App">
      <Mumma />
    </div>
  );
}
