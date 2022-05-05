import React, { useEffect, useState } from 'react'
import styledComponents from 'styled-components'

/* pass in props: todo, todos/setTodos ; initiated inside TodoList component
todo keeps track of ea individual todo item, todos is an array that stores all of the items.
setTodos is the function used to add ea todo to the array */
export const TodoItem = ({todo, todos, setTodos, color}) => {
    
    const [editedTodo, setEditedTodo] = useState(todo.title)

    useEffect(() => {
        // whenever a todo is updated,
        // it is going to update the value of editedTodo to be todo.title
        // editedTodo can only be updated using the setEditedTodos function
        setEditedTodo(todo.title)
    }, [todo]) // todo is an dependancy of this useEffect. whether useEffect runs depends on todo state

    const deleteTask = () => {
        console.log(todo.id, todo.title, '🔥' )
        const currentTodoId = todo.id
    
        // filter through todos[], look at the todo.id of ea
        // find any todo.ids that is not the currentTodoId
        // all todo items that is not the current, gets gathered up and placed back into the todo[]
        // what ever does not get saved will no longer be displayed
        setTodos(todos.filter(todo => todo.id !== currentTodoId)) // give me all todos whose id is not the current todo id, update todos array with this new array that does not show deleted/hidden id
        // console.log(todos)
    }

    const saveTodo = () => { 
        const currentTodoId = todo.id
        setTodos( // store/set upcoming new information into todos[]
            todos.map(todo => // map through todos array
                // if todo.id is the same as the current todo id, then change a specific part of that todo's object (ie the title) keep the rest of the object as is
                todo.id === currentTodoId ? {...todo, title: editedTodo} : todo
            )
        )
    }

    const completeTodo = () => {
        const currentTodoId = todo.id
        setTodos(todos.map(todo =>
            todo.id === currentTodoId ? {...todo, completed: !todo.completed} : todo
        ))
    }

    return (
    // make sure all styled components have a closing tag
    // DO NOT SELF CLOSE A STYLED COMPONENT!

    <TodoListItem> {/* styled components are divs you can create to edit css from directly inside component */}
        <Checkbox className={todo.completed ? 'fas fa-check-circle' : 'far fa-circle'} onClick={completeTodo} style={{ color: color }} />
        <input 
            type="text"
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} // if todo completed is true, put a line through the task. if todo is not complete, no line through
            value={editedTodo}
            onChange={e => setEditedTodo(e.target.value)} 
        />
        {/* CONDITIONAL RENDERING - only display check mark while todo item is being edited*/}
        {todo.title !== editedTodo && (
        <SaveTodo className="fas fa-check" onClick={saveTodo}/>
        )}
        <DeleteTodo className='fas fa-trash-alt' onClick={deleteTask}/>
   </TodoListItem>
  )
}

// define each styled compoent 
const TodoListItem = styledComponents.div`
    // background-color: red;
    
    height: 50px;
    display: flex;
    align-items: center;
    margin: 15px 20px;
    padding: 15px 20px;
    transition: 0.3s;

    input {
        flex: 1;
        font-size: 18px;
        outline: none;
        background: none;
        border: none;
        color: #eee;
    }
`
const Checkbox = styledComponents.i `
    font-size: 20px;
    margin-right: 10px;
    cursor: pointer;
`

const SaveTodo = styledComponents.i`
    padding: 10px 16px;
    border-radius: 4px;
    margin-right: -12px;
    color: #42c732;
    
    &:hover {
        background-color: #2b6127;
        transition: 0.3s;
        cursor: pointer;
    }
`
const DeleteTodo = styledComponents.i`
    color: #ff1605;
    padding: 10px 6px;
    margin-left: 14px;
    border-radius: 4px;
    margin-right: -12px;

    &:hover {
        background-color: #7e2601;
        transition: 0.3s;
        cursor: pointer;
    }
`