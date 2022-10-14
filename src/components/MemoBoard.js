import './Board.css';
import memoData from './memoData';
import { useState } from 'react';
export default function MemoBoard() {
    const [memos, setMemos] = useState(memoData);
    const [mode, setMode] = useState('INIT');
    const [memoId, setMemoId] = useState(null);

    const Article = (props) => {
        return <article>
            <h3>{props.title}</h3>
            {props.desc}
        </article>
    }
    const Create = (props) => {
        return <article>
            <form onSubmit={(e) => {
                e.preventDefault();
                let memo = {
                    title : e.target[0].value,
                    desc : e.target[1].value,
                    id : Date.now().toString()
                };
                setMemos([...memos, memo]);
                setMemoId(memo.id);
                setMode('READ');
            }}>
                <input placeholder='제목' />
                <textarea placeholder='내용' />
                <button>추가</button>
            </form>
        </article>
    }
    const Edit = (props) => {
        const [title, setTitle] = useState(props.title);
        const [desc, setDesc] = useState(props.desc);
        return <article>
            <form onSubmit={e => {
                e.preventDefault();
                let copy = [...memos];
                for(let i=0; i<copy.length; i++){
                    if(copy[i].id === memoId){
                        copy[i].title = title;
                        copy[i].desc = desc;
                        break;
                    }
                }
                setMemos(copy);
                setMode('READ');
            }}>
                <input 
                    value={title}
                    placeholder='제목'
                    onChange={(e) => {
                        setTitle(e.target.value);                    
                    }}
                />
                <textarea 
                    value={desc}
                    placeholder='내용' 
                    onChange={e => {
                        setDesc(e.target.value);
                    }}
                />
                <button>수정</button>
            </form>
        </article>
    }
    const Memo = (props) => {
        return <li key={'m' + props.id}>
            <a id={props.id} href={"/read/" + props.id} onClick={ e => {
                e.preventDefault();
                setMode('READ');
                setMemoId(e.target.id);
            }}>{props.title}</a>
        </li>;
    }
    const Button = (props) => {
        const buttonType = {
            create : {
                icon : 'plus',
                event : () => {
                    setMode('CREATE');
                }
            },
            canceal :  {
                icon : 'xmark',
                event : () => {
                    setMode(mode ==='CREATE' ? 'INIT' : 'READ');
                }
            },
            update : {
                icon : 'pen',
                event : () => {
                    setMode('UPDATE');
                }
            },
            delete : {
                icon : 'trash',
                event : () => {
                    const deleteIndex = memos.findIndex(o => o.id === memoId);
                    memos.splice(deleteIndex, 1);
                    setMemos([...memos]);
                    setMode('INIT');
                }
            }
        };
        return <button onClick={buttonType[props.type].event}>
            <i className={"fa-sharp fa-solid fa-" + buttonType[props.type].icon + " fa-lg"}></i>
        </button>;
    }

    let content = null;
    if(mode === 'INIT') {
        content = <Article title="Hello" desc="Let's start memo.." />;
    } else if(mode === 'READ' || mode === 'UPDATE'){
        let title, desc = null;
        for(let i=0; i<memos.length; i++) {
            if(memos[i].id === memoId) {
                title = memos[i].title;
                desc = memos[i].desc;
                break;
            }
        }
        content = mode === 'READ' ? 
            <Article title={title} desc={desc} /> : 
            <Edit title={title} desc={desc}/>;
    } else if(mode === 'CREATE'){
        content = <Create/>;
    }

    return <>
        <header>
            <h2>메모 게시판</h2>
        </header>
        <nav>
            <span><b>모든 메모 {memos.length}</b></span>
            <ul>
                {memos.map(m => <Memo id={m.id} title={m.title}/>)}
            </ul>
        </nav>
        {content}
        <footer>        
            {mode !== 'CREATE' && <Button type='create'/>}
            {(mode === 'CREATE' || mode === 'UPDATE') && <Button type='canceal'/>}
            {mode === 'READ' && <Button type='update'/>}
            {mode === 'READ' &&<Button type='delete'/>}
        </footer>
    </>;
}
