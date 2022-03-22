import { TodoItem } from "../TodoItem/index";
import "../TodoList/todoList.scss";

function TodoList({ searchTodos, setTodos, todos }) {
  return (
    <div className="todoList">
      <section>
        <ul>
          {searchTodos.map((tarea) => {
            return (
              <TodoItem
                className="TodoItem"
                key={tarea.nombre}
                nombre={tarea.nombre}
                searchTodos={searchTodos}
                setTodos={setTodos}
                todos={todos}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export { TodoList };
