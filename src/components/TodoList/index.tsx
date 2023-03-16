import { memo, useEffect, useRef, useState } from "react";
import {v4 as uuidv4} from 'uuid'

type taskData = {
  id: string
  name: string,
  isChecked: boolean
}

const TodoList = () => {

  const [task, setTask] = useState<taskData[]>([])
  const [titleTask, setTitleTask] = useState("");
  const inputRef = useRef<HTMLInputElement>(null)

  const createTask = () => {

    if(!titleTask && inputRef.current) {
      inputRef.current.focus()
      return
    }

    const createdTask = { id: uuidv4(),  name: titleTask, isChecked: false };
    const newTask = [...task];
    newTask.push(createdTask);
    setTask(newTask);
  };

  const checkTask = (id: string) => {
    const updateTask = [...task];
    const index = updateTask.findIndex((task) => id === task.id);
    updateTask[index].isChecked = !updateTask[index].isChecked;

    setTask(updateTask);
    
  }
  
  useEffect(() => {
   const tasksStorage = localStorage.getItem('tasks')

   if(!localStorage || !tasksStorage ) return

   setTask(JSON.parse(tasksStorage))

  }, []) 

  useEffect(() => {

    localStorage.setItem('tasks', JSON.stringify(task))

  }, [task])

  return (
    <>
      <h3>To-do List</h3>

      <span>Create task</span>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setTitleTask(e.target.value)}
        style={{ color: "black" }}
        ref={inputRef}
        
      />
      <button style={{ backgroundColor: "gray" }} onClick={createTask}>
        create
      </button>

      <ul>
        {task.map((item) => (
          <li key={`${item.name}${Math.random()}`}>
            <span>{item.name}</span>
            <input
              type="checkbox"
              checked={item.isChecked}
              onChange={() => {
                checkTask(item.id);
              }}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default memo(TodoList);
