import React from 'react'

const person = (props) => {
    return (
    <div>
    <p>i'm a person , my name is {props.name}, 
    i don't like giving my age! 
    but yeah i'am {props.age} {props.children}</p>
    
    </div>
    
);
} 


export default person;


