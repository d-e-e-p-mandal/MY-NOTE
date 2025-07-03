function handleClick() {
    console.log("hlw");
}

function handleMouseOver() {
    console.log("Hiiii");
}

function handleDoubleClick() {
    console.log("Moused Double Clicked");
}

function Button() {
    return(
        <>
            <button onClick={handleClick}>Click Me</button>
            <p onMouseOver={handleMouseOver}>Hi</p>
            <button onDoubleClick={handleDoubleClick}>Double Click</button>
        </>
    );
}

export default Button