export default function Keydown() {
    function handleKey(e) {
        console.log(e);
    }
    return <input type='text' onKeyDown={handleKey}>
    </input>;
}