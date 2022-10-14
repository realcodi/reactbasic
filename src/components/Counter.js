import { useState } from 'react';
export default function Counter() {
    const [number, setNumber] = useState(0);
    function onClick() {
        setNumber(number + 1);
        console.log(number);
    }
    return <>
        <div>{number}</div>
        <button onClick={onClick}>+</button>
    </>
}
