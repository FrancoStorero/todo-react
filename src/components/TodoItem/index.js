import "../TodoItem/todoItem.scss";
import CheckIcon from "@mui/icons-material/Check";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { IconButton } from "@mui/material";
import { useState } from "react";

function TodoItem({ nombre, searchTodos, todos, setTodos }) {
  const [completed, setCompleted] = useState();

  const completeTodos = (nombre) => {
    const todoIndex = searchTodos.findIndex((todo) => todo.nombre === nombre);
    const newTodos = [...todos];

    if (!completed) {
      newTodos[todoIndex].completed = true;
      setTodos(newTodos);
      const completed = todos[todoIndex].completed;
      setCompleted(completed);
    } else {
      newTodos[todoIndex].completed = false;
      setTodos(newTodos);
      const completed = todos[todoIndex].completed;
      setCompleted(completed);
    }
  };

  const onDelete = (nombre) => {
    const todoIndex = todos.findIndex((todo) => todo.nombre === nombre);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <li className="todoItem">
      <IconButton onClick={() => completeTodos(nombre)}>
        <CheckIcon
          value={nombre}
          color={completed ? "success" : "action"}
          className="tachado"
        />
      </IconButton>
      <p className={completed ? "line-through" : undefined}>{nombre}</p>
      <IconButton onClick={() => onDelete(nombre)}>
        <DeleteOutlineOutlinedIcon color="error" />
      </IconButton>
    </li>
  );
}

export { TodoItem };
