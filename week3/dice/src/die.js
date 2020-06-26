import React from 'react';

class Die extends React.Component {
    render() {
        return (
            <div>
                
            
            <h1 className="dice">{this.props.num}</h1>
            </div>
        )
    }
}
export default Die;