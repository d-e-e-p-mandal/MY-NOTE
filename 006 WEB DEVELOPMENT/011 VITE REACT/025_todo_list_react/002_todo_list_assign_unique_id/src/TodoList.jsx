import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([{task : "simple task", id : uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");


    const addTodo = () => {
        if (newTodo.trim() === "") return; // avoid empty tasks
        setTodos((prevTodo) => [...prevTodo, {task : newTodo, id : uuidv4()}]);
        setNewTodo("");//If you simply want to clear the input after adding a task, you don’t need to use the functional form of setNewTodo
    };


    const updateNewTodo = ((event)=>{
        console.log(event.target);
        console.log(event.target.value);
        setNewTodo(event.target.value); // ✅ Direct assignment
    })

    return(
        <>
            <h2>Todo List</h2>
            <input type="text" placeholder="Enter Task " value={newTodo} onChange={updateNewTodo}/>
            &nbsp;&nbsp;&nbsp;
            <button onClick={addTodo}> Add Task </button>

            <h4>Task List : </h4>
            <ul>
               {todos.map((todo,index) => (
                     <li key={todo.id}>Task :{index + 1} {" => "} {todo.task}</li>
               ))}
            </ul>
        </>
    )
}