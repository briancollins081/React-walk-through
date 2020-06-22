import React from 'react';
import Game from './Game';
import Random from './Random';

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Random maxNum="10000"/>
            </div>
        )
    }
}

export default App;