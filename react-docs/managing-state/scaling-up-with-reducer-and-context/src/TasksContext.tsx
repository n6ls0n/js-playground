// ############# Combining a reducer with context  ############

//  IMPORTANT: Change the file extension to .ts to run this code

// import { createContext, Dispatch } from 'react';
// import {task} from './AddTask';
// export interface Action {
//     type: 'added' | 'changed' | 'deleted';
//     id?: number;
//     text?: string;
//     task?: task;
// }


// export const TasksContext = createContext<task[] | null>(null);
// export const TasksDispatchContext = createContext<Dispatch<Action> | null>(null);


// ############# Moving all wiring into a single file   ##############

//  IMPORTANT: Change the file extension to .tsx to run this code


import { createContext, useReducer, Dispatch } from 'react';


export const TasksContext = createContext<task[] | null>(null);
export const TasksDispatchContext = createContext<Dispatch<Action> | null>(null);

import {task} from './AddTask';
export interface Action {
    type: 'added' | 'changed' | 'deleted';
    id?: number;
    text?: string;
    task?: task;
}


export function TasksProvider({ children }: { children: React.ReactNode }) {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

function tasksReducer(tasks: task[], action: Action): task[] {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id ?? Date.now(),
        text: action.text ?? '',
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (action.task && t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialTasks = [
  { id: 0, text: 'Philosopher’s Path', done: true },
  { id: 1, text: 'Visit the temple', done: false },
  { id: 2, text: 'Drink matcha', done: false }
];
