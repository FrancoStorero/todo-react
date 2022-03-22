import "../TodoSearch/todoSearch.scss";

function TodoSearch({ searchValue, setSearchValue }) {
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <div className="todoSearch">
        <input
          value={searchValue}
          onChange={handleChange}
          placeholder="Buscador de tareas"
        />
      </div>
    </>
  );
}

export { TodoSearch };
