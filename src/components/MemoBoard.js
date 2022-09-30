import './Board.css';
import { useState } from 'react';
export default function MemoBoard() {
    const [memos, setMemos] = useState([
        {id: '1', title : '리액트 props', desc: 'props는 자식요소로 전달됩니다.'}, 
        {id: '2', title : '리액트 state', desc: 'state는 컴포넌트 내에서 관리합니다.'}, 
    ]);
    const [mode, setMode] = useState('INIT');
    const [id, setId] = useState(null);

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
                setId(memo.id);
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
                    if(id === copy[i].id){
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
                        setTitle(e.target.value);                    }}
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
                setId(e.target.id);
            }}>{props.title}</a>
        </li>;
    }
    const IconBtn = (props) => {
        const btn = {
            'create' : {
                'icon' : 'plus',
                'event' : () => {
                    setMode('CREATE');
                }
            },
            'canceal' :  {
                'icon' : 'xmark',
                'event' : () => {
                    setMode(mode ==='CREATE' ? 'INIT' : 'READ');
                }
            },
            'update' : {
                'icon' : 'pen',
                'event' : () => {
                    setMode('UPDATE');
                }
            },
            'delete' : {
                'icon' : 'trash',
                'event' : () => {
                    const deleted = memos.filter(m => m.id !== id);
                    setMemos(deleted);
                    setMode('INIT');
                }
            }
        };
        return <button onClick={btn[props.type].event}><i className={"fa-sharp fa-solid fa-"+btn[props.type].icon+" fa-lg"}></i></button>;
    }

    let content = null;
    if(mode === 'INIT') {
        content = <Article title="Hello" desc="Let's start memo.." />;
    } else if(mode === 'READ' || mode === 'UPDATE'){
        let title, desc = null;
        for(let i=0; i<memos.length; i++) {
            if(id === memos[i].id) {
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
            {mode !== 'CREATE' && <IconBtn type='create'/>}
            {(mode === 'CREATE' || mode === 'UPDATE') && <IconBtn type='canceal'/>}
            {mode === 'READ' && <IconBtn type='update'/>}
            {mode === 'READ' &&<IconBtn type='delete'/>}
        </footer>
    </>;
}
