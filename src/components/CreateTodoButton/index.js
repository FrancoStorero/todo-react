import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import "./createTodoButton.scss";
import { MyModal } from "../MyModal";
import { useState } from "react";

function CreateTodoButton({ todos, setTodos }) {
  const [open, setOpen] = useState(false);

  const addTodo = () => {
    setOpen(true);
  };

  return (
    <div className="addTodoButton">
      <AddCircleOutlineIcon onClick={addTodo} color="info" />

      <MyModal
        open={open}
        setOpen={setOpen}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export { CreateTodoButton };
