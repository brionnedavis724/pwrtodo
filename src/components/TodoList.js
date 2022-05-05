import React, { useState } from 'react'
import styledComponents from 'styled-components'
import { TodoItem } from './TodoItem'

export const TodoList = ({ name, color, icon }) => {
    
    const [todo, setTodo] = useState('') // keeps track of ea todo typed
    const [todos, setTodos] = useState([]) // keeps track of the full array of todos

    const addButtonHandler = () => {
        // console.log('addButtonHandler')
        console.log(todo)
        // setTodos([todo, ...todos]) // most recent todo gets placed at the front of array
        if (todo.length > 0) { // do not add task if input box is blank
            setTodos([
                // rather than gaining access to just the input text of todo,
                // create an object that holds the todo's id, title and completed status
                // push this object onto the front of new todos[] 
                {
                    id: todos.length,
                    title: todo,
                    completed: false,
                },
                ...todos,
            ])
        }
        console.log(todos)
        setTodo('') // once todo is typed and plus sign is clicked, setTodo('') clears the input box
    } 

    return (
        <Wrapper>
            <TodoCategoryHeader> {/* grouping of sections ie personal, work, school, etc */}
                {/* <CategoryIcon style={{ background: '#fd76a1' }}> */}
                <CategoryIcon style={{ background: color }}>
                    {/* <i className={'fas fa-user'} /> icons displayed before ea section title */}
                    <i className={ icon } /> {/* icons displayed before ea section title */}
                </CategoryIcon>
                <Title>{name}</Title>
                <TodoInput value={todo} onChange={ e => setTodo(e.target.value) }/> {/* grab the event (e) and setTodos to equal the value of the target event*/}
                <AddTodo className='fas fa-plus' onClick={addButtonHandler} />
            </TodoCategoryHeader>
            {/* <TodoItem todo='workout' />
            <TodoItem todo='take protein' />
            <TodoItem todo='rest' /> */}
            {todos.map((todo, index) => (
                // loop/map through the todos[]. for ea iteration create a new TodoItem and give it a value of what was typed inside todo input
                <TodoItem key={index} todo={todo} todos={todos} setTodos={setTodos} color={color} />
                // <h2 style={{ color: 'green' }}>{todo}</h2>    
            ))}
        </Wrapper>  
    )
}

const Wrapper = styledComponents.div`
    // border: 1px solid red;

    background: #20212d;
    margin-bottom: 30px;
    border-radius: 20px;
    overflow: hidden;
    max-width: 700px;
    width: 100%;
`
const TodoCategoryHeader = styledComponents.div`
    // border: 1px solid white;

    background-color: #272833;
    height: 50px;

    display: flex;
    align-items: center;
    padding: 15px 20px;
    // gap: 5px;

`
const CategoryIcon = styledComponents.div`
    height: 30px;
    width: 30px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`
const Title = styledComponents.div`
    // border: 1px solid blue;
    // flex: 1 // take up all the space
    padding-top: 3px;
    font-size: 25px;
    font-weight: 590;
`

const TodoInput = styledComponents.input`
    height: 30px;
    font-size: 18px;
    outline: none;
    border: none;
    background-color: #20212d;
    border-radius: 4px;
    color: white;
    padding: 4px 10px;
    margin-left: 100px;
`
// const TodoListItems = styledComponents.div``
const AddTodo = styledComponents.i`
    padding: 10px; 16px;
    border-radius: 4px;
    margin-right: -12px;
    
    &:hover {
        backgrund-color: #20212d;
        transition: 0.3s;
        cursor: pointer;
    }
`