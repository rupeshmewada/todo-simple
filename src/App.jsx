import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoInput from './component/TodoInput'
import TodoList from './component/TodoList'

function App() {
  const [listTodo, setListTodo] = useState([]);
  // console.log(listTodo);

  function addList(inputText) {

    if (inputText !== '') {
      setListTodo([...listTodo, inputText])
    }
  }


  function deleteListItem(key) {
    let newListTodo = [...listTodo]
    newListTodo.splice(key, 1)
    setListTodo([...newListTodo])
  }


  return (
    <>
      <TodoInput list={{ addList, listTodo }} />

      <div className='flex justify-evenly mt-3'>
        <h1 className='font-bold text-3xl mt-2'>Todo list </h1>
        <button className=' border-white bg-red-400' onClick={() => setListTodo([])}>clear all</button>
      </div>

      <div>
        {
          listTodo.map((listitem, i) => {
            return (
              <TodoList key={i} index={i} item={listitem} deleteitem={deleteListItem} />
            )
          }
          )
        }
      </div>


    </>
  )
}

export default App
