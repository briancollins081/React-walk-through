import React from 'react';
import '../Styles/Dice.css';

const Dice = props => {
    return (
        <div className={`Dice ${props.rolling ? 'shaking' : ''}`}>
            <i className={`fas fa-7x fa-dice-${props.num}`}></i>
        </div>
    )
}

export default Dice;