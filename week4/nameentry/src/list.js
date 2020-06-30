  
import React, { Component } from 'react';
import Card from './card';

class list extends Component {

    render() {
        const mappedNames = this.props.allNames.map( (name,index) => {
            return(
               <Card
                 key={index}
                 fullName={name.fullName}
                 />
            )
          })
        return (
        
                <div>
                {mappedNames}
                </div>
                
        
        ) ;
    }
}

export default list