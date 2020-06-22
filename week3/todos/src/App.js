import React from 'react';
import './App.css';
import  data from "./data.json"
import Superhero from "./superhero"

console.log(data)
function App() {
 const myFunction= ()=>{console.log("I am a function passed from a parent through prop")}
  // const heros =
  return (
    <div className="App">
    
      {
        data.map(
          (hero, index)=>
            <Superhero 
            key={index} 
            id={index}
            name={hero.name} 
            show={hero.show} 
            catchPhrase={hero.catchPhrase} 
            imageName={hero.imageName} 
            eventlistener={myFunction}/>
          )
      }
        
    </div>
  );
}

export default App;
