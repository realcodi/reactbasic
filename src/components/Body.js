import { useContext } from 'react';
import { AppContext } from './Context';
export default function Body() {
    const {user, setUser, theme} = useContext(AppContext);
    const style = {
        height: '400px',
        padding: '20px',
        background: theme === 'dark' ? 'black' : 'white',
        color: theme === 'dark' ? 'Gainsboro' : 'black'
    }
    const EnterInput = ()=>{
        return <>
            <form onSubmit={(e)=>{
                e.preventDefault();//새로고침 안되도록
                setUser(e.target[0].value);
                }}>
                <input placeholder="이름을 입력하세요."></input>
                <button>입장</button>
            </form>
        </>
    }
    const Entered = ()=>{
        return <>
            안녕하세요. {user}님.
            <p>Hooks에 대해서 학습해 봅시다.</p>
            <button onClick={()=>{
                setUser(undefined);
            }}>Exit</button>
        </>
    }
    return <div style={style}>
        {user ? <Entered/> : <EnterInput/>}
    </div>
}