import './App.css';
import { useState } from 'react'
import { Header } from './components/Header';
import styledComponents from 'styled-components';
import { TodoList } from './components/TodoList';
// import { TodoItem } from './components/TodoItem';
import { Sidebar } from './components/Sidebar';

function App() {

  // // const fakeTasks = ['Eat dinner', 'do laundry', 'go to the gym']

  // // whatever is typed in input box should be added to this array
  // const [tasks, setTasks] = useState([]) // 'pray', 'eat', 'meditate', 'hustle'
  
  // // task stores the string of each individual task typed
  // const [task, setTask] = useState('')

  // const addTaskHandler = () => {
  //   console.log('clicked add task button')
  //   // when adding a new task to the tasks array, also append the items that were already in them keeping the order
  //   // make a new array and put all the tasks inside, including new task added. store this updates array back into tasks
  //   setTasks([task, ...tasks]) // task is the new task just typed. add this task to the task array
  
  //   console.log(task)
  //   console.log(tasks)
  // }  

  // return (
  // <>
  //   <h2 style={{ color: 'white' }}>TODO LIST APP 🚀 </h2>
  //   {/* onChange={} get access to some 'event', store in 'e' extract value from e. set the value as 'task'  */}
  //   {/* the onChange={} being listened for here is the 'event' of each key(target) type. we're getting the value of ea key typed at this input/target */}
  //   <input type="text" style={{ outline: "none" }} value={task} onChange={ e => setTask(e.target.value) } />
  //   <button onClick={addTaskHandler}>Add task</button>
  //   {/* {fakeTasks.map(task => (
  //     <h2 style={{ color: 'green' }}>{task}</h2>
  //   ))} */}
  //    {tasks.map(task => (
  //     // <p style={{ color: 'green' }}>{task}</p>
  //     <p style={{ color: 'white' }}>hello</p>
  //   ))}

  //   <Header />
  // </>
  // );

  // toggled as true expands the sidebar. toggled false minimizes the sidebar
  const [sidebarToggle, setSidebarToggle] = useState(false)

  // add all TodoList categories
  const todoList = [
    {
      name: 'Personal',
      color: '#fd76a1',
      icon: 'fas fa-user',
    },
    {
      name: 'Work',
      color: '#70c4be',
      icon: 'fas fa-briefcase',
    },
    {
      name: 'Profit with React',
      color: '#ab6ddf',
      icon: 'fas fa-file-code',
    }
  ]

  return (
    <Wrapper>
      {/* <h2>Hello</h2> */}
      <Header sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
      <Main>
        {/* pass down the sidebarToggle value into the Sidebar ; then destruct it inside of Sidebar.js */}
        <Sidebar sidebarToggle={sidebarToggle} todoList={todoList} />
        <MainContent style={{ width: '500vw' }}>
        {/* if sidebarToggle is true (displayed) adjust the width of the MAIN CONTENT: 100vh minus 300px if true :[or] 100vw minus 70px if false */}
        {/* <MainContent style={{ width: `calc(100vw - (${sidebarToggle ? '300px' : '70px'}))` }}> */}
          <TodoContent>
            <Title>Dashboard</Title>
            <Greeting>Goodmorning, King!</Greeting>
            {/* {[ <h2>Pray</h2>, <h2>Meditate</h2>]} */}
            {/* <TodoItem /> */}
            {/* <TodoList /> */}
            {todoList.map(category => (
              <TodoList 
                key={category.name}
                name={category.name}
                color={category.color}
                icon={category.icon} 
              />
            ))}
          </TodoContent>
        </MainContent>
      </Main>
    </Wrapper>
  )
}

export default App;

const Wrapper = styledComponents.div `
  // border: 3px solid green;

  background-color: #18181f;
  min-height: 100vh;
  min-width: 100vw;
  color: #eee;
`
const Main = styledComponents.div`
  display: flex;
`

const MainContent = styledComponents.div`
  // border: 3px solid red;  
  display: flex;
  justify-content: center;
  transition: 0.3s; // animations run 0.3seconds
`
const TodoContent = styledComponents.div`
  // border: 3px solid green;
  max-width: 700px;
  width: 100%;
`
const Title = styledComponents.div`
  margin: 50px 0;
  font-size: 30px;
  font-weight: 600;
`
const Greeting = styledComponents.div`
  margin-bottom: 20px;
  font-size: 40px;
  font-weight: 600;
`