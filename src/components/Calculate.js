import { useEffect } from 'react';
import { useState } from 'react';
import './Calculate.css';
export default function Calculate(){
    const [calc, setCalc] = useState(0);
    const ResultInput = () => {
        return <input value={calc} onClick={e =>{
            setCalc(0);
        }}readOnly></input>
    }
    const Btn = (props) => {
        return <button value={props.name} onClick={e => {
            const btn = e.target.value;
            if(btn === '=') {
                let result = eval(calc);
                setCalc(result);
            } else
            setCalc(calc === 0 ? btn : calc + btn);
        }}>
            {props.name}
        </button>
    }
    const ButtonContainer = () => {
        let btns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '='];
        return <div className='Container'>
            {btns.map(item => <Btn key={item.toString()} name={item}></Btn>)}
        </div>
    }
    return <>
        <ResultInput/>
        <ButtonContainer/>
    </>
}