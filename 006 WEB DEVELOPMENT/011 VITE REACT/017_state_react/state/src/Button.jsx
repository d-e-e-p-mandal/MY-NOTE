function Button() {
    let count = 0;

    function incCount() {
        count += 1; // it increase count on console not update in dom
        console.log(count);
    }

    return(
       <>
            <h3>count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
       </>
    );
}
export default Button

//to update we use hooks