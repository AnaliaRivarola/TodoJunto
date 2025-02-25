const PersonCard = (props) => {
    return (
      <>
        <h3>{props.lastName}, {props.firstName}</h3>
        <p>Age: {props.age}</p>
        <p>Hair Color: {props.hairColor}</p>
        <button onClick={props.incrementarEdad}>Birthday button for {props.firstName}, {props.lastName}</button>
      </>
    );
  }
  
  export default PersonCard;
  