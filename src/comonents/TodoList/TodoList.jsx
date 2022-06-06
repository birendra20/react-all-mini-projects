import { nanoid } from "nanoid";
import { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [task, SetTask] = useState([]);
  const [text, setText] = useState("");

  const addTask = (data) => {
    const payload = {
      title: data,
      status: false,
      id: nanoid(9)
    };
    SetTask([...task, payload]);
  };

  const handleDelete = (id) => {
    SetTask((prev) => prev.filter((element) => element.id !== id));
  };

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            addTask(text);
          }}
        >
          Add Task
        </button>
      </div>
      <div className="lists">
        {task.map((item) => {
          return (
            <div className="list">
              <p>{item.title}</p>
              <button onClick={() => handleDelete(item.id)} className="btn ">
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default TodoList;
