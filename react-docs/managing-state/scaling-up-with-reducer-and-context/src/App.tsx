import { JSX } from 'react/jsx-runtime';

// ############# Combining a reducer with context  #############
// import { useReducer } from 'react';
// import AddTask from './AddTask';
// import TaskList from './TaskList';
// import { TasksContext, TasksDispatchContext, Action } from './TasksContext';
// import { task } from './AddTask';

// export default function TaskApp() {
//   const [tasks, dispatch] = useReducer(
//     tasksReducer,
//     initialTasks
//   );

//   return (
//     <TasksContext.Provider value={tasks}>
//       <TasksDispatchContext.Provider value={dispatch}>
//         <h1>Day off in Kyoto</h1>
//         <AddTask />
//         <TaskList />
//       </TasksDispatchContext.Provider>
//     </TasksContext.Provider>
//   );
// }

// function tasksReducer(tasks: task[], action: Action): task[] {
//     switch (action.type) {
//         case 'added': {
//             return [...tasks, {
//                 id: action.id!,
//                 text: action.text!,
//                 done: false
//             }];
//         }
//         case 'changed': {
//             return tasks.map(t => {
//                 if (t.id === action.task!.id) {
//                     return action.task!;
//                 } else {
//                     return t;
//                 }
//             });
//         }
//         case 'deleted': {
//             return tasks.filter(t => t.id !== action.id);
//         }
//         default: {
//             throw Error('Unknown action: ' + action.type);
//         }
//     }
// }

// const initialTasks = [
//   { id: 0, text: 'Philosopher’s Path', done: true },
//   { id: 1, text: 'Visit the temple', done: false },
//   { id: 2, text: 'Drink matcha', done: false }
// ];

// ############# Moving all wiring into a single file   #############

import AddTask from './AddTask';
import TaskList from './TaskList';
import { TasksProvider } from './TasksContext';

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
