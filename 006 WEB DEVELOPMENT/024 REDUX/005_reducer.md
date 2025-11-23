### Folder Structure :

```
src
    features
        todo
            todoSlice.js

    app
        store.js

```


```js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: []
};
```
or : Add Default 

```js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [{id : "abc", task: "demo-task", isDone : false}],
};
```
#### Nano id :
    Use to create unique id like uuidv4.

```js
import { nanoid } from '@reduxjs/toolkit';
```


```js
import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{id : "abc", task: "demo-task", isDone : false}],
};

export const todoSlice = createSlice({
    name: "todo"
    initialState, // intitialState also we can define here

    reducers: {
        addTodo:(state, action) =>{
            const newTodo = () => {
                id f: nanoid(),
                task: action.payload
                isDone: false,
            }
            state.todos.push(newTodo); // direct acceptable by redutoolkit
        },
        deleteTodo: (state, action) =>{
            state.todos.filter((todo)=> todo.id != action.payload);
        },
        marksAsDone: (state, action) =>{
            state.todos = state.todos.map((todo)=> (
                if(todo.id === action.payload) {
                    todo.isDone = true;
                }
            ));
        },
    },
})


export const {addTodo, deleteTodo, markAsDone} = todoSlice.actions;
export default todoSlice.reducer;
``` 

IImport in Store :

```js
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "../features/todo/todoSlice"
export default configureStore({
  reducer: {}
})
```