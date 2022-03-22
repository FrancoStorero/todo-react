import "./todoCounter.scss";

const TodoCounter = ({ totalTareas, tareasCompletadas }) => {
  return (
    <div className="todoCounter">
      <h2>
        Tareas completadas {tareasCompletadas} de {totalTareas}
      </h2>
    </div>
  );
};

export { TodoCounter };
