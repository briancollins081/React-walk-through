import React from 'react';

class Random extends React.Component {
    constructor(props) {
        super(props);
        this.state = { num: 100 }

        this.createTimer();
    }
    createTimer() {
        let count = 0;
        const timer = setInterval(() => {
            let rand = Math.floor(Math.random() * this.props.maxNum)
            this.setState({ num: rand });
            count++;
            if (count > 5) {
                clearInterval(timer);
            }
        }, 1000);
    }
    render() {
        return (
            <h1>{this.state.num}</h1>
        )
    }
}

export default Random;