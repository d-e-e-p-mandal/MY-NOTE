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

    

    let deleteTodo = (id) => {
        setTodos((prevTodo) => 
            prevTodo.filter((todo) => todo.id !== id)
        );
    };
    /*  //this is also correct 
    let deleteTodo = (id) => {
         setTodos((prevTodo) => {
             return prevTodo.filter((todo) => todo.id !== id);
         })
    }
    */

    const deleteAllTodos = () => {
        setTodos([]); // clear the todo list
    };


    //Upper Case seleted row
    let upperCaseOne = (id) => {
        setTodos((todos) =>
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase(), // ✅ use comma not semicolon
                    };
                } else {
                    return todo;
                }
            })
        );
    };



    return(
        <>
            <h2>Todo List</h2>
            <input type="text" placeholder="Enter Task " value={newTodo} onChange={updateNewTodo}/>
            &nbsp;&nbsp;&nbsp;
            <button onClick={addTodo}> Add Task </button>

            <h4>Task List : </h4>
            <table border={1}>
                <thead>
                    <tr>
                        <th> Task No</th>
                        <th> Task Id</th>
                        <th> Task Name</th>
                        <th > Delete Button</th>
                        <th > Update Button</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo,index) => (
                        <tr key={todo.id}>
                            <td> {index} </td>
                            <td> {todo.id} </td>
                            <td> {todo.task} </td>
                            <td> <button onClick={()=>{deleteTodo(todo.id)}}> Delete</button> </td>
                            <td> <button onClick={()=>{upperCaseOne(todo.id)}}> UPPER Case</button> </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={deleteAllTodos}>Delete All</button>
        </>
    )
}