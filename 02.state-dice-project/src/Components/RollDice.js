import React from 'react';
import '../Styles/RollDice.css'
import Dice from './Dice';


class RollDice extends React.Component {
    static defaultProps = {
        nums: ['one', 'two', 'three', 'four', 'five', 'six']
    };
    constructor(props) {
        super(props);
        this.state = {
            die1: 'one',
            die2: 'one',
            rolling: false
        }
    }

    roll = () => {
        //pick 2 random numbers
        const num1 = Math.floor(Math.random() * this.props.nums.length);
        const num2 = Math.floor(Math.random() * this.props.nums.length);
        //set state with the random numbers
        this.setState({
            die1: this.props.nums[num1],
            die2: this.props.nums[num2],
            rolling: true
        });
        //reset rolling on timer
        setTimeout(()=>{
            this.setState({rolling: false})
        }, 1000)
    }

    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-dice">
                    <Dice num={this.state.die1} rolling={this.state.rolling} />
                    <Dice num={this.state.die2} rolling={this.state.rolling} />
                </div>
                <button className="RollDice-button" onClick={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling ? 'Rolling' : 'Roll Dice'}
                </button>
            </div>
        )
    }
}

export default RollDice;