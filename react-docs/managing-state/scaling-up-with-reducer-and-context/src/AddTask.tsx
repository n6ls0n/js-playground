import { useState, useContext } from 'react';
import { TasksDispatchContext } from './TasksContext';

export interface task { id: number, text: string, done: boolean }

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useContext(TasksDispatchContext);
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        if (dispatch) {
          dispatch({
            type: 'added',
            id: nextId++,
            text: text,
          });
        }
      }}>Add</button>
    </>
  );
}

let nextId = 3;
