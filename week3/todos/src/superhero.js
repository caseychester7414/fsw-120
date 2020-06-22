import React from 'react';
function Superhero(props) {
    return (
      <div className="App" 
      onClick={props.eventlistener}>
          <h1>{props.name}</h1>
          <h2>{props.show}</h2>
          <h3>{props.catchPhrase}</h3>
          <img src={props.imageName}></img>
      </div>
    );
  }
  export default Superhero