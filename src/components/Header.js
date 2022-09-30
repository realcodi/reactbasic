import { useContext } from 'react';
import { AppContext } from './Context';
export default function Header() {
    const {theme} = useContext(AppContext);
    const style = {
        borderBottom : '1px solid gray',
        background: theme === 'dark' ? '#191919': 'white',
        paddingTop: '5px',
        color: 'DodgerBlue'
    }

    return <header style={style}>
        <h2>리액트 입문과정</h2>
    </header>
}
