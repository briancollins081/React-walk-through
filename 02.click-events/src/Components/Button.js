import React from 'react';

class Button extends React.Component{

    render(){
        return <button onClick={function(){alert('Clicked')}}>Click Me</button>
    }
}

export default Button;