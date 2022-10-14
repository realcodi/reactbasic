import { useState } from "react";
export default function List() {
    const [list, setList] = useState(['javascript', 'css', 'html']);
    return <>
        <button onClick={(e)=>{
            const copy = [...list];
            copy[0] = 'react';
            setList(copy);
            console.log(list, copy);
        }}>modify</button>
        <div>{list[0]}</div>
        <div>{list[1]}</div>
        <div>{list[2]}</div>
    </>
}
