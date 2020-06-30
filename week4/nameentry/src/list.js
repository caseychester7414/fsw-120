  
import React, { Component } from 'react';
import Card from './card';

class list extends Component {

    render() {
    const mappedNames = this.props.allNames.map( name => {
        return (
            <Card 
                fullName={name.fullName}
            />
        );
    })
        return (
            <div>
                <ol>
                    {mappedNames}
                </ol>
            </div>
        );
    }
}

export default list