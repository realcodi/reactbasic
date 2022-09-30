export default function Submit() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(e.target[1].value);
    }
    function preventEnter(e) {
        if(e.key === 'Enter') 
            e.preventDefault();
    }
    return <form onSubmit={handleSubmit}>
        <input type='text' onKeyDown={preventEnter}></input>
        <input type='password' onKeyDown={preventEnter}></input>
        <button>로그인</button>
    </form>
}