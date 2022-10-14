import { useState } from 'react';
import './Calculate.css';
export default function Calculate(){
    const [formula, setFormula] = useState(0);
    const DisplayBox = () => {
        return <input value={formula} readOnly onClick={e =>{
            setFormula(0);
        }}></input>;
    }
    const Button = (props) => {
        return <button value={props.name} onClick={e => {
            const clicked = e.target.value;
            if(clicked === '=') {
                setFormula(eval(formula));
            } else
            setFormula(formula === 0 ? clicked : formula + clicked);
        }}>{props.name}</button>;
    }
    const ButtonContainer = () => {
        let keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '='];
        return <div className='Container'>
            {keys.map(k => <Button key={k.toString()} name={k}/>)}
        </div>;
    }
    return <>
        <DisplayBox/>
        <ButtonContainer/>
    </>
}
