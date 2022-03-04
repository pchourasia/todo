import { ACTION } from "../../const/action"

const todos = (state = [], action) => {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return [...state, action.body];
    case ACTION.TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    case ACTION.UPDATE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            title: action.title
          };
        }
        return todo;
      });
    case ACTION.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
};

export default todos;
