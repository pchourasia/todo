import { useState } from "react";
import { useDispatch } from "react-redux";
import TodoActions from "./store/actions";

export default function AddTodo() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const onClickAddTodo = (e) => {
    e.preventDefault();
    if(todo.trim() != ""){
      TodoActions.addTodo(todo)(dispatch);
    }
    setTodo("");
  };
  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  };
  return (
    <div>
      <form onSubmit={onClickAddTodo}>
        <input
          type="text"
          value={todo}
          onChange={onChangeTodo}
          placeholder="Click here to Add Todo"
        />
        {/* <button type="submit">Add</button> */}
      </form>
    </div>
  );
}
