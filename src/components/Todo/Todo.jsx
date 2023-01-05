import { AiOutlineDelete } from "react-icons/ai";

const Todo = ({ todo, onDelete, onUpdate }) => {
  const checked = todo.status === "complete";

  const onChange = (e) => {
    const status = e.currentTarget.checked ? "complete" : "active";

    onUpdate({ ...todo, status });
  };

  return (
    <li>
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} />
        {todo.text}
      </label>
      <button type="button" onClick={() => onDelete(todo)}>
        <AiOutlineDelete />
      </button>
    </li>
  );
};

export default Todo;
