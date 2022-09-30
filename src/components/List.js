import { useState } from "react";
export default function List() {
    let arr = ['javascript', 'css', 'html'];
    let [list, setList] = useState(arr);
    return <>
        <button onClick={()=>{
            let copy = [...list];
            copy[0] = 'react';
            setList(copy);
            console.log(list, copy);
        }}>modify</button>
        <div>{list[0]}</div>
        <div>{list[1]}</div>
        <div>{list[2]}</div>
    </>
}