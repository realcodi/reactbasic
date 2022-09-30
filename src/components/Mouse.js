export default function Mouse() {
    const style = {
        height : '200px',
        width : '200px',
        background : 'green'
    }
    function handleMouseMove(e) {
        console.log('in');
        e.target.style.background = 'black';
    }
    function handleMouseLeave(e) {
        console.log('out');
        e.target.style.background = 'green';
    }
    return <div 
        style={style} 
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}>
    </div>;
}