# Provider Component :
Import in App.jsx

The <Provider> componext makes the redux store available to any nested components that need to access the Redux store.

- To use it we need Hook `useSelector`. It is a custome Hook.

### Dispatching Action 
Triggering a State Change 

- The useDispatch hook allows you to send or dispatch an action to the redux store by giving the action as an argument to the dispatch variable.

- The useSelector hooks allow you to extract data or the state from the Redux store using selector function. (return data).


File name : App.jsx
```jsx 
import Todo from "./components/todo";
import { Provider from } from "react-redix"
import { store } from "./app/store"

function App() {
    return (
        <>
            <Provider store={store}>
                <Todo />
            </Provider>
        </>
    )
}
```


Filename : Todo.jsx

```jsx
import {useSelector } from "react-redux;

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    console.log(todos);

    return (
        <>
            <h2> Todos </h2>
            <ul>
             {
                todos.map((todo) => (<li key={todo.id}>todo.task</li>) )
             }
             </ul>
        </>
    )
}
```



# Dispatching Action 

Add Todo

File Name : AddForm.jsx
```jsx
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "./features/todo/todoSlice";

export default function AddForm() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const submitHandler = (evt) =>{
        evt.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
    };

    return (
        <>
            <form onSubmit={submitHadler}>
                <input type="text" onChange{(e)=>{setTask(e.target.value)}}></input>
                <button> Add Task </button>
            </form>
        </>
    )
};
```


# Delete Task
```jsx
diapatch(deleteTodo(id));
```