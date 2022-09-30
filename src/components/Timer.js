import './Timer.css';
import { useState, useEffect } from "react";
export default function Timer(){
    const [data, setData] = useState(10);
    const [work, setWork] = useState(false);
    useEffect(() => {
        const timer = setInterval(()=>{
            if(!work || data === 0) {
                clearInterval(timer);
                setWork(false);
            }
            else setData(data-1);
        }, 1000);
        return () => {
            clearInterval(timer);
        }
    });
    const Button = (props) => {
        return <button onClick={() => {
            setWork(props.value);
            props.name !== '재개' && props.value && setData(10);
        }}>{props.name}</button>
    }
    return <>
        <h1>{data} 초</h1>
        {!work && <Button name='시작' value={true}/>}
        {work && <Button name='중지' value={false}/>}
        {!work && data !==10 && <Button name='재개' value={true}/>}
    </>;
}
