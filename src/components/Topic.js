import logo from '../logo.svg';
function Header() {
    return <header>
        <h3><a href="/">토픽</a></h3>
    </header>;
}

function Nav() {
    return <nav>
        <ol>
            <li><a href='/topic/1'>리액트 소개</a></li>
            <li><a href='/topic/2'>JSX 문법</a></li>
            <li><a href='/topic/3'>컴포넌트 생성</a></li>
        </ol>
    </nav>;
}

function Article() {
    return <article>
        <div><br/>
            <img src={logo} alt='' height='70' align='left'></img>
            <p>리액트 관련 토픽을 확인해보세요</p>
            <sup>작성일자 : 22. 08. 20.</sup>
        </div>
    </article>;
}

export default function Topic() {
    return <>
        <Header></Header>
        <Nav></Nav>
        <Article></Article>
    </>;
}
