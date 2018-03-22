import React from 'react';

const Button = (props) => {
    console.log(props);
    return (
        <div>
            {props.buttons.map(button => 
            <div>
                <button
                    key={button.id} 
                    onClick={() => props.handleClick(button.id, button.name, button.flag)}>
                    {button.name}
                </button>
            </div>)}
        </div>
    );
};
export default Button;