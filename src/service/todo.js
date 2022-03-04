const TodoService = {
  saveTodo: (body) => {
    return fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then((response) => response.json());
  },
  updateTodo: (id, body) => {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then((response) => response.json());
  },
  deleteTodo: (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE"
    });
  }
};

export default TodoService;
