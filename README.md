# [ 리액트 입문과정 ]

3강 이후 강의에서 사용된 소스코드 모음입니다.<br/>
App.js에서 필요한 컴포넌트를 랜더링해서 실습을 진행해보세요.<br/>
간단한 코드는 아래에서 확인하고, components 폴더에서 컴포넌트 코드를 참고하시기 바랍니다.

<br/>

---

<br/>

### 3강. JSX 문법

<br/>

1. 하나의 부모요소  


    ``` js
    function App() {
        return (
            <div>Hello</div>
            <div>React!</div>
        );
    }
    ```
<br/>

2. 자바스크립트 표현식
<br/>

    ``` js
    function App() {
        const name = 'jin';
        return (
            <div>Hello</div>
            <div>{jin}!</div>
        );
    }
    ``` 
<br/>

3. 조건문
<br/>

    ``` js
    function App() {
        let who = '';
        const account = 'Y';
        if(account === 'Y') {
            who = <div>회원 입니다.</div>;
        } else {
            who = <div>비회원 입니다.</div>;
        }
        return (
            <>
                {who}
            </>
        );
    }
    ``` 

    ``` js
    function App() {
        const account = 'N';
        return (
            <>
                {account === 'Y' ? (
                    <div>회원 입니다.</div>
                ) : (
                    <div>비회원 입니다.</div>
                )}
            </>
        );
    }
    ``` 

    ``` js
    function App() {
        const account = 'N';
        return (
            <>
                {account === 'Y' && <div>회원 입니다.</div>}
            </>
        );
    }
    ``` 
<br/>

4. 스타일, 카멜표기
<br/>

    ``` js
    function App() {
        const style = {
            backgroundColor : 'blue',
            fontSize : '50px',
            color : 'white'
        };

        return (
            <div className=''App>
                <div style={style}>안녕하세요!</div>
            </div>
        );
    }
    ``` 
    <br/>

5. 주석 
<br/>

    ``` js
    function App() {
        // 한 줄 주석 사용
        /*
        여러 줄의 
        주석 사용
        */

        return (
            <div className=''App>
                {/*comment*/}
                <div //comment
                //comment
                ></div>
                {/*comment 단축키 [ ctrl + / ] */}
            </div>
        );
    }
    ``` 

<br/>

---

<br/>

### 4강. 엘리먼트와 컴포넌트

<br/>

1. 엘리먼트 랜더링  

    - react 18 이후 

    ``` js
    import ReactDOM from 'react-dom/client';
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <App />
    );
    ```

    - react 18 이전
    ``` js
    import ReactDOM from 'react-dom';
    ReactDOM.render(
        <App />,
        document.getElementById('root');
    );
    ```

<br/>

2. 엘리먼트 업데이트

    ``` js
    import ReactDOM from 'react-dom/client';
    const root = ReactDOM.createRoot(document.getElementById('root'));
    function tick() {
        root.render(
            <h1>지금 시간은 {new Date().toLocaleTimeString()}입니다.</h1>
        );
    }
    setInterval(tick, 1000);
    ```

<br/>

3. 컴포넌트 반복과 배열

    ``` js
    export default function Welcome(props) {
        return <h1>Hello, {props.name}!!</h1>;
    }
    ```
    ``` js
    import Welcome from './components/Welcome';
    function App() {
        const people = ['John', 'Amy', 'Kein', 'Lora', 'Zem'];
        const helloList = people.map(name => <Welcome name={name}/>);
        return (
            <div className='App'>
                {helloList}
            </div>
        );
    }
    ```

<br/>

- Welcome.js

<br/>

---

<br/>

### 5강. 속성

<br/>

1. 컴포넌트와 key

    - key 속성 없음
    ``` js
    function App() {
        const array = ['A', 'B', 'add', 'C', 'D'];
        return (
            <div className='App'>
                {array.map(item => <div>{item}</div>)}
            </div>
        );
    }
    ```
    - key 속성 있음
    ``` js
    function App() {
        const array = [
            {value : 'A', id : 1},
            {value : 'B', id : 2},
            {value : 'add', id : 5},
            {value : 'C', id : 3},
            {value : 'D' id : 4}
        ];
        return (
            <div className='App'>
                {array.map(item => <div key={item.id}>{item.value}</div>)}
            </div>
        );
    }
    ```

<br/>

2. 속성 기본값 설정하기

    - defaultProps 사용
    ``` js
    export default function Welcome(props) {
        return <h1>Hello, {props.name}!!</h1>;
    }
    Welcome.defaultProps = {
        name : 'User'
    };
    ```

<br/>

3. 속성값 전달하기

    - 비구조화 할당 속성 처리
    ``` js
    function Hello({style, name}){ 
        return <div style={sytle}>Hello, {name}!!</div>;
    }
    ``` 
    - 스프레드 연산자 사용
    ``` js
    function App() {
        const props = {
            name : 'react',
            style :  {
                color : 'white',
                height : '40px',
                background : 'red'
            }
        };
        return (
            <div className='App'>
                <Hello {...props}/>
            </div>
        );
    }
    ```

<br/>

- Hello.js

<br/>

---

<br/>

### 6강. 이벤트 처리

<br/>

- Click.js
- Change.js
- Submit.js
- Focus.js
- Mouse.js 


<br/>

---

<br/>

### 7강. 상태

<br/>

- Counter.js
- List.js
- Calculate.js

<br/>

---

<br/>

### 8강. 훅

<br/>

- Timer.js
- Context.js
- Header.js
- Body.js
- Footer.js

<br/>

---

<br/>

### 9강. CRUD 구현

<br/>

- MemoBoard.js

<br/>

---

<br/>

### 10강. 검색과 정렬 구현

<br/>

- images 폴더
- albumData.js
- PhotoAlbum.js
