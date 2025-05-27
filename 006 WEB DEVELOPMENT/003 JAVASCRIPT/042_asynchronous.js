/* Asynchronous ;
    Due to synchronous programming, sometimes imp instructions get blocked due to some previous
instructions, which causes a delay in the UI. Asynchronous  code exection allows to execute next
instructions immediately and doesn't block the flow.
*/
console.log("1");
console.log("2");

function display() {
    console.log("HII");
}
setTimeout(display,8000);

setTimeout(() => {
    console.log("Hlw everyone");
}, 4000);

console.log("3");
console.log("4");
