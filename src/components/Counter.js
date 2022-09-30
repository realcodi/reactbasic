import React, {useState} from 'react';
export default function Counter() {
    let number = 0;
    function onClick() {
        number = number + 1;
        console.log(number);
    }
    return <>
        <div>{number}</div>
        <button onClick={onClick}>+</button>
    </>
}