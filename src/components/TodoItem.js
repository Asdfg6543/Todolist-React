import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { BiCheckCircle } from "react-icons/bi";

export default function TodoItem(props) {
  const { todo, removeTodo, completeTodo, importantTodo } = props;
  return (
    <div
      className={todo.completed ? "todo-row complete" : "todo-row"}
      style={todo.important ? { background: "orange" } : {}}
    >
      {todo.text}
      <div className="iconsContainer">
        <button
          onClick={() => importantTodo(todo.id)}
          className="important-btn"
        >
          !
        </button>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          style={{ marginRight: "5px" }}
        />
        <BiCheckCircle onClick={() => completeTodo(todo.id)} />
      </div>
    </div>
  );
}
