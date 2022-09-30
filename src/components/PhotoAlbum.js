import data from './albumData';
import './Album.css';
import { useState } from 'react';
function Photo(props) {
    const path = '../images/' + props.value.fileName + '.jpg';
    return <div className='Container'>      
        <img src={path} alt='' onClick={e => {
            props.onCLickMode(path);
        }}></img>
        <div>{props.value.title}</div>
        <div>{new Date(props.value.date).toLocaleDateString()}</div>
    </div>;
}
function Search(props) {
    return <form onSubmit={e => {
        e.preventDefault();
        const searched = data.filter(item => item.title.includes(props.text));
        if(searched.length > 0) props.onSearch(searched);
        else props.onSearch([]);
    }}>
        <input
            type='text'
            placeholder='검색어 입력'
            value={props.text}
            onChange={e => {
                e.preventDefault();
                props.onChangeMode(e.target.value);
            }}
        ></input>
        <button>검색</button>
    </form>
}
function Sort(props) {
    return <div className='sort'>
        <span onClick={e => {
            const result = data.concat().sort((a, b) => {
                if(a.title > b.title) return 1;
                else if(a.title < b.title) return -1;
                else return 0;
            });
            props.onSort(result);
        }}>가나다순</span>
        <span onClick={e => {
            props.onSort(data.sort((a, b) => b.date - a.date));
        }}>최신순</span>
    </div>;
}
/* 자세히 보기 기능 만들기 */
function Detail(props) {
    return <div className='detail'>
        <img src={props.path} onClick={e => props.close()}></img>
    </div>;
}
export default function MiniAlbum() {
    const [list, setList] = useState(data);
    const [keyword, setKeyword] = useState('');
    const [clicked, setClicked] = useState(false);
    const photos = list.map(i => <Photo key={i.fileName} value={i} onCLickMode={path => setClicked(path)}/>);
    return <div className='album'>
        <Search
            text={keyword}
            onSearch={result => setList(result)}
            onChangeMode={t => setKeyword(t)}
        />
        <Sort onSort={result  => setList(result)}/>
        <div className='grid'>
            {photos}
        </div>

        {clicked && <Detail path={clicked} close={() => setClicked(false)}/>}
    </div>;
}