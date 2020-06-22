import React from 'react';
import DiceBox from "./diceBox"
class Die extends React.Component {
    render() {
        return (
            <div>
                < DiceBox/>
            
            <h1 className="dice">{this.props.num}</h1>
            </div>
        )
    }
}
export default Die;