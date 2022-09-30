export default function Focus() {
    function handleFocus(e) {
        e.target.placeholder = '아이디 입력';
    }
    function handleBlur(e){
        e.target.placeholder = '';
    }
    return <input type='text' onBlur={handleBlur} onFocus={handleFocus}></input>;
}