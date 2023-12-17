import './App.css';
import { useRef, useState } from 'react';

function App() {
  
  const [info,setInfo] = useState([]);
  const todos = useRef("")
  const [check,setCheck] = useState(false)
  const [value,setValue] = useState('')
  const [index,setIndex] = useState()
  
  const handleAdd = () =>{
    const todo = todos.current.value
     const newItem = {completed:false,todo}
    setInfo([...info, newItem])
    todos.current.value=""
  }
  
  const handeleDone = (i) =>{
    const newTodos = [...info]
    newTodos[i].completed = !newTodos[i].completed
    setInfo(newTodos)
  }

  const handleDelet = (i) =>{
    const newTodo = [...info].filter((e,ind)=>ind !== i)
    setInfo(newTodo)
  }

  const handleUpdate = (i) =>{
    const newTodos = [...info]
    setCheck(true)
    setValue(newTodos[i].todo)
    setIndex(i)

  }
  const Modify = () =>{
    const newTodos = [...info]
    newTodos[index].todo = value
    setInfo(newTodos)
    setCheck(false)
    
  }

  
  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>TO DO LIST</h1>
      <div className='to-do-container'>
      <input type='text' placeholder='Enter item...' ref={todos}/>
      <button onClick={handleAdd}>add</button>
      <ul>
        { info.map((e,i)=>
        <div key={i} className='items'>
          <li className={` ${e.completed ? "completed" : ""}`}
          onClick={_=>handeleDone(i)}>
            {e.todo }
          </li>
          <span onClick={e=>handleUpdate(i)} 
           style={{cursor:"pointer"}}>🤓</span>
          <span onClick={e=>handleDelet(i)} 
           style={{cursor:"pointer"}}>🗑️</span>
        </div>
          )}
        </ul> 
      </div>

      {check && <><input value={value} onChange={e=>setValue(e.target.value)}
        /><button onClick={Modify}>Modify</button></>}
    </div>
  );
}

export default App;
