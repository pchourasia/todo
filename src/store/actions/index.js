import { ACTION } from "../../const/action"
import TodoService from "../../service/todo";
const addTodo = (title) => {
  return (dispatch) => {
    let body = {
      id: Math.random() * 10000,
      title: title,
      completed: false
    };
    TodoService.saveTodo(body).then((res) => {
      dispatch({
        type: ACTION.ADD_TODO,
        body
      });
    });
  };
};

const toggleTodo = (id, completed) => {
  return (dispatch) => {
    let body = { completed };
    TodoService.updateTodo(id, body).then((res) => {
      dispatch({
        type: ACTION.TOGGLE_TODO,
        id
      });
    });
  };
};

const removeTodo = (id) => {
  return (dispatch) => {
    dispatch({
      type: ACTION.REMOVE_TODO,
      id
    });
  };
};

const updateTodo = (id, title) => {
  return (dispatch) => {
    let body = { title };
    TodoService.updateTodo(id, body).then((res) => {
      dispatch({
        type: ACTION.UPDATE_TODO,
        id,
        title
      });
    });
  };
};

export default { addTodo, toggleTodo, removeTodo, updateTodo };
