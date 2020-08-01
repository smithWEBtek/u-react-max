import React from 'react';
import Radium from 'radium';

import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} defaultValue={props.name} />
            <input type="submit" onSubmit={props.submit}></input>
        </div>
    )
};

export default Radium(person);