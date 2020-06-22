import React from 'react';

class CounterClicks extends React.Component {
    state = { isWin: false, count: 0 };

    handleButtonClick = (event) => {
        const count = Math.floor(Math.random() * 10);
        this.setState({
            count: count,
            isWin: this.state.count === 7
        });
    }
    renderActionSection = () => {
        if(!this.state.isWin){
            return <div>
                <h1>Clicked: {this.state.count}</h1>
                <button onClick={this.handleButtonClick}>Generate Random Number</button>
            </div>
        }
        return <div>
            <h1>Hurray!, you win.</h1>
        </div>
    }
    render() {
        return (
            this.renderActionSection()
        );
    }
}

export default CounterClicks;