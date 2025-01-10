let nextId = 0;
let calls = 0;

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export function getVisibleTodos(todos: Todo[], showActive: boolean): Todo[] {
    console.log(`getVisibleTodos() was called ${++calls} times`);
    const activeTodos = todos.filter(todo => !todo.completed);
    const visibleTodos = showActive ? activeTodos : todos;
    return visibleTodos;
}

interface CreateTodo {
    (text: string, completed?: boolean): Todo;
}

export const createTodo: CreateTodo = (text, completed = false) => {
  return {
    id: nextId++,
    text,
    completed
  };
};

export const initialTodos = [
  createTodo('Get apples', true),
  createTodo('Get oranges', true),
  createTodo('Get carrots'),
];
