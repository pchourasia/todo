import "./styles.css";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

export default function App() {
  const todoList = useSelector((state) => state);
  return (
    <div>
      <div className="mainContainer">
        <div className="header">Todo</div>
        {todoList.map((todo) => {
          return <Todo key={todo.id} data={todo} />;
        })}
        <AddTodo />
      </div>
      <div className="mainContainer notes">
        How to use:
        <ul>
          <li>click on Add todo to add todo items.</li>
          <li>click on todo item to update it</li>
          <li>on mouse hover todo, delete icon will be visible.</li>
          <li>clicking on checkbox will toggle todo item completed state,</li>
        </ul>
      </div>
    </div>
  );
}
