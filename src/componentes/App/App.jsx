import React, { Component } from "react";
import PersonCard from "../PersonCard/PersonCard";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { firstName: "Jane", lastName: "Doe", age: 45, hairColor: "Black" },
        { firstName: "John", lastName: "Smith", age: 88, hairColor: "Brown" },
        { firstName: "Millard", lastName: "Fillmore", age: 50, hairColor: "Brown" },
        { firstName: "Maria", lastName: "Smith", age: 62, hairColor: "Brown" }
      ]
    };
  }

  incrementarEdad = (index) => {
    const updatedPersons = [...this.state.persons];
    updatedPersons[index].age += 1;
    this.setState({ persons: updatedPersons });
  }

  render() {
    return (
      <>
        {this.state.persons.map((person, index) => (
          <PersonCard
            key={index}
            firstName={person.firstName}
            lastName={person.lastName}
            age={person.age}
            hairColor={person.hairColor}
            incrementarEdad={() => this.incrementarEdad(index)}
          />
        ))}
      </>
    );
  }
}

export default App;
