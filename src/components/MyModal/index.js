import { Box, Button, Divider, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import "./myModal.scss";

function MyModal({ open, setOpen, todos, setTodos }) {
  const [inputNewTodo, setInputNewTodo] = useState("");

  const handleClose = () => setOpen(false);

  const inputNombre = (e) => {
    setInputNewTodo(e.target.value);
  };

  const newTodo = {
    nombre: `${inputNewTodo}`,
    completed: false,
  };

  const addNewTodo = () => {
    setTodos([...todos, newTodo]);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="boxModal">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Agrega tu Tarea
        </Typography>
        <Divider />
        <input onChange={inputNombre} type="text" className="inputTodo" />
        <div className="buttonsModal">
          <Button onClick={handleClose} variant="outlined">
            Cerrar
          </Button>
          <Button onClick={addNewTodo} variant="contained">
            Guardar
          </Button>
        </div>
      </Box>
    </Modal>
  );
}

export { MyModal };
