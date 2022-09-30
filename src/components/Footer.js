import { useContext } from 'react';
import { AppContext } from './Context';
export default function Footer() {
    const {theme, setTheme} = useContext(AppContext);
    const style = {
        height: '40px',
        background: theme === 'dark' ? '#191919' : 'white',
        paddingTop: '15px',
        borderTop : '1px solid gray',
        color: theme === 'dark' ? 'white' : 'black'
    }
    const RadioBtn = (props) => {
        return <input type='radio' 
            value = {props.value}
            name='theme' 
            checked = {props.checked}
            onChange={(e)=>{
                setTheme(e.target.value);
            }
        }/>
    }

    return <footer style={style}>
        화면 스타일 : 
        <RadioBtn value='light' checked={theme === 'light' ? 'checked' : undefined}/>
        light
        <RadioBtn value='dark' checked={theme === 'dark' ? 'checked' : undefined}/>
        dark
    </footer>
}