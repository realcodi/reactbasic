export default function Click() {
    function handleClick(e) {
        alert('clicked');
    }
    const mouse = {cursor : 'pointer'};
    return <div style={mouse} onClick={handleClick}>클릭해보세요.</div>;
}