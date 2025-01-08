import { useState, useContext } from 'react';
import { TasksContext, TasksDispatchContext } from './TasksContext';
import {task} from './AddTask';

// ############# Combining a reducer with context  #############
export default function TaskList() {
  const tasks: task[] = useContext(TasksContext) || [];
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task } : {task: task}) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TasksDispatchContext);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={e => {
            if (dispatch) {
              dispatch({
                type: 'changed',
                task: {
                  ...task,
                  text: e.target.value
                }
              });
            }
          }} />
        <button onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          if (dispatch) {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                done: e.target.checked
              }
            });
          }
        }}
      />
      {taskContent}
      <button onClick={() => {
        if (dispatch) {
          dispatch({
            type: 'deleted',
            id: task.id
          });
        }
      }}>
        Delete
      </button>
    </label>
  );
}



