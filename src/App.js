import "./App.scss";
import { TodoCounter } from "./components/TodoCounter";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { CreateTodoButton } from "./components/CreateTodoButton";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Grid } from "@mui/material";
import { useState } from "react";



function App() {

  //persistir info en el tiempo / falta programar

 /*  const localStorageTodos = localStorage.getItem('TODOS_V1')
  let parsedTodos;

  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
  }else{
    parsedTodos = JSON.parse(localStorageTodos)
  } */



  const [todos, setTodos] = useState([]);
  const [searchValue, setSearchValue] = useState("");
 

  const tareasCompletadas = todos.filter((todo) => todo.completed).length;
  const totalTareas = todos.length;
  

  let searchTodos = [];

  if (!searchValue.length >= 1) {
    searchTodos = todos;
  } else {
    searchTodos = todos.filter((todo) => {
      const todoNombre = todo.nombre.toLowerCase();
      const searchNombre = searchValue.toLowerCase();

      return todoNombre.includes(searchNombre);
    });
  }



  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item className="container" lg={6} md={8} sm={9} xs={11} >
        <TodoCounter
          tareasCompletadas={tareasCompletadas}
          totalTareas={totalTareas}
        />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList searchTodos={searchTodos} todos={todos} setTodos={setTodos}/>
        <CreateTodoButton todos={todos} setTodos={setTodos}/>
      </Grid>
    </Grid>
  );
}

export { App };
