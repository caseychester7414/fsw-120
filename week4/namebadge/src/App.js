import React from 'react';
import Badge from './Badge';
import './App.css';
import Form from './Form'


class App extends React.Component {
    constructor() {
        super();
        this.state = { 
            formState:false
    
        }}
     submit = (formState) =>
    {  this.setState({
      formState:formState
    });
      } 
    render()
    {return (
        <div className='app-wrapper'>   
            { this.state.formState? < Badge formWrap = {this.state.formState} />: console.log(this.state.formState)}
            
            < Form submit = {this.submit} />
        </div>
    )};

    }


export default App;