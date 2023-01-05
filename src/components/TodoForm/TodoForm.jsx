import { useCallback, useState } from "react";
import shortid from "shortid";

const TodoForm = ({ setTodos }) => {
  const [text, setText] = useState("");

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const _text = text.trim();

      if (_text.length === 0) {
        setText("");
        return;
      }

      const todo = {
        id: shortid.generate(),
        text: _text,
        status: "active",
      };

      setText("");
      setTodos((prev) => [...prev, todo]);
    },
    [text]
  );

  const onChange = useCallback((e) => {
    const { value } = e.currentTarget;
    setText(value);
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={text} onChange={onChange} />
        <button>작성</button>
      </form>
    </div>
  );
};

export default TodoForm;
