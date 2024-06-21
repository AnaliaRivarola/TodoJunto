import React, { Component } from "react";
import PersonCard from "../PersonCard/PersonCard";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <PersonCard
          firstName={"Jane"}
          lastName={"Done"}
          age={"45"}
          hairColor={"Black"}
        />

        <PersonCard
          firstName={"John"}
          lastName={"Smith"}
          age={"88"}
          hairColor={"Brown"}
        />

        <PersonCard
          firstName={"Millard"}
          lastName={"Fillmore"}
          age={"50"}
          hairColor={"Brown"}
        />

        <PersonCard
          firstName={"Maria"}
          lastName={"Smith"}
          age={"62"}
          hairColor={"Brown"}
        />
      </>
    );
  }
}

export default App;
