import React from 'react';
import ContactCard from "./ContactCard"
import './App.css';

function App() {
  return (
      <div className="contacts">
          <ContactCard 
              contact={{title: "Disturbed", subtitle: "Stupify", backGroundColor: "", information: "this is a heavyMetal Band"}}
          />
          
          <ContactCard 
              contact={{title: "Asking Alexender", subtitle: "Avenged Seven Fold", backGroundColor: "", information: "group of 5, british rockband from yorkshire"}}
          />
          
          <ContactCard
              contact={{title: "Falling in reverse ", subtitle: "drugs", backGroundColor: "", information: "pop/rock"}}
          />
          
          <ContactCard 
              contact={{title: "slipknot", subtitle: "phycho", backGroundColor: "", information: "very awesome band "}}
          />
           <ContactCard 
              contact={{title: "day to remember", subtitle: "fun", backGroundColor: "", information: "my wife likes them "}}
          />
           <ContactCard 
              contact={{title: "rock", subtitle: "tons of music to listen to", backGroundColor: "", information: "used back in the 70s when using drugs. "}}
          />
           <ContactCard 
              contact={{title: "metal", subtitle: "everybody loves metal", backGroundColor: "", information: "very loud to some.. smoothing to others."}}
          />
           <ContactCard 
              contact={{title: "country ", subtitle: "i grow up in country music", backGroundColor: "", information: "very different from what alot of people like."}}
          />
          
      </div>
  )
}

export default App