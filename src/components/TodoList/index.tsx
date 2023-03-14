import { memo, useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState([
    { name: "fazer alguma coisa", isChecked: false },
  ]);
  const [titleTask, setTitleTask] = useState("");

  const createTask = () => {
    const createdTask = { name: titleTask, isChecked: false };
    const newTask = [...task];
    newTask.push(createdTask);
    setTask(newTask);
  };

  const checkTask = (item: any) => {
    const updateTask = [...task];
    const index = updateTask.findIndex((task) => item.name === task.name);
    updateTask[index].isChecked = !updateTask[index].isChecked;

    setTask(updateTask);
  };

  return (
    <>
      <h3>To-do List</h3>

      <span>Create task</span>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setTitleTask(e.target.value)}
        style={{ color: "black" }}
      />
      <button style={{ backgroundColor: "gray" }} onClick={createTask}>
        create
      </button>

      <ul>
        {task.map((item) => (
          <li key={`${item.name}`}>
            <span>{item.name}</span>
            <input
              type="checkbox"
              checked={item.isChecked}
              onChange={() => {
                checkTask(item);
              }}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default memo(TodoList);
