export default function Change() {
    function handleKey(e) {
        console.log('keyup', e.target.value);
    }
    function handleChange(e) {
        console.log('change', e.target.value);
    }
    return <input 
        type='text' 
        onChange={handleChange}
        onKeyUp={handleKey}>
    </input>;
}