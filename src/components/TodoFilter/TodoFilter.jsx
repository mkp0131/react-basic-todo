const TodoFilter = ({ filters, onFilterChange }) => {
  return (
    <ul>
      {filters.map((filter) => (
        <li key={filter}>
          <button onClick={() => onFilterChange(filter)}>{filter}</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoFilter;
