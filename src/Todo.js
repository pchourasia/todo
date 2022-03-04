import { useState } from "react";
import { useDispatch } from "react-redux";
import TodoActions from "./store/actions";

export default function Todo({ data }) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [todoTitle, setTodoTitle] = useState(data.title);
  const handleOnChange = () => {
    TodoActions.toggleTodo(data.id, !data.completed)(dispatch);
  };
  const onRemoveClick = () => {
    TodoActions.removeTodo(data.id)(dispatch);
  };
  const editTodo = (val) => {
    setEdit(val);
    if (!val) {
      TodoActions.updateTodo(data.id, todoTitle)(dispatch);
    }
  };
  const updateTodo = (e) => {
    setTodoTitle(e.target.value);
  };

  return (
    <div className="todo">
      <div className="container">
        <input
          type="checkbox"
          className={data.completed ? "disabledCheckbox" : ""}
          value={data.title}
          name=""
          checked={data.completed}
          onChange={handleOnChange}
        />
        {edit ? (
          <form onSubmit={() => editTodo(false)} onBlur={() => editTodo(false)}>
            <input
              autoFocus
              type="text"
              value={todoTitle}
              onChange={updateTodo}
            />
          </form>
        ) : (
          <span
            className={`label ${data.completed ? "disabledCheckbox" : ""}`}
            onClick={() => editTodo(true)}
          >
            {data.title}
          </span>
        )}
      </div>
      <span className="hoverEl" onClick={onRemoveClick}>
        <img
          height="16px"
          alt="cancel"
          src="https://img.icons8.com/fluency-systems-regular/48/000000/cancel.png"
        />
      </span>
    </div>
  );
}
