import { JSX } from 'react/jsx-runtime';

// ############# Challenge 1 Solution #############
// import { useState } from 'react';
// import { initialTodos, createTodo, Todo } from './todos';

// export default function TodoList() {
//   const [todos, setTodos] = useState(initialTodos);
//   const [showActive, setShowActive] = useState(false);
//   const activeTodos = todos.filter(todo => !todo.completed);
//   const visibleTodos = showActive ? activeTodos : todos;

//   return (
//     <>
//       <label>
//         <input
//           type="checkbox"
//           checked={showActive}
//           onChange={e => setShowActive(e.target.checked)}
//         />
//         Show only active todos
//       </label>
//       <NewTodo onAdd={newTodo => setTodos([...todos, newTodo])} />
//       <ul>
//         {visibleTodos.map(todo => (
//           <li key={todo.id}>
//             {todo.completed ? <s>{todo.text}</s> : todo.text}
//           </li>
//         ))}
//       </ul>
//       <footer>
//         {activeTodos.length} todos left
//       </footer>
//     </>
//   );
// }

// interface NewTodoProps {
//   onAdd: (newTodo: Todo) => void;
// }

// function NewTodo({ onAdd }: NewTodoProps) {
//   const [text, setText] = useState('');

//   function handleAddClick() {
//     setText('');
//     onAdd(createTodo(text));
//   }

//   return (
//     <>
//       <input value={text} onChange={e => setText(e.target.value)} />
//       <button onClick={handleAddClick}>
//         Add
//       </button>
//     </>
//   );
// }

// ############# Challenge 2 Solution #############

// import { useState, useEffect } from 'react';
// import { initialTodos, createTodo, getVisibleTodos, Todo } from './todos2';

// export default function TodoList() {
//   const [todos, setTodos] = useState(initialTodos);
//   const [showActive, setShowActive] = useState(false);
//   const [text, setText] = useState('');
//   const [visibleTodos, setVisibleTodos] = useState<Todo[]>([]);

//   useEffect(() => {
//     setVisibleTodos(getVisibleTodos(todos, showActive));
//   }, [todos, showActive]);

//   function handleAddClick() {
//     setText('');
//     setTodos([...todos, createTodo(text)]);
//   }

//   return (
//     <>
//       <label>
//         <input
//           type="checkbox"
//           checked={showActive}
//           onChange={e => setShowActive(e.target.checked)}
//         />
//         Show only active todos
//       </label>
//       <input value={text} onChange={e => setText(e.target.value)} />
//       <button onClick={handleAddClick}>
//         Add
//       </button>
//       <ul>
//         {visibleTodos.map(todo => (
//           <li key={todo.id}>
//             {todo.completed ? <s>{todo.text}</s> : todo.text}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// ############# Challenge 3 Solution #############

// See website

// ############# Challenge 4 Solution #############

import { useState, useEffect } from 'react';

export default function Form() {
  const [showForm, setShowForm] = useState(true);
  const [message, setMessage] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setShowForm(false);
    sendMessage(message);
  }

  if (!showForm) {
    return (
      <>
        <h1>Thanks for using our services!</h1>
        <button onClick={() => {
          setMessage('');
          setShowForm(true);
        }}>
          Open chat
        </button>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="Message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button type="submit" disabled={message === ''}>
        Send
      </button>
    </form>
  );
}

function sendMessage(message: string) {
  console.log('Sending message: ' + message);
}
