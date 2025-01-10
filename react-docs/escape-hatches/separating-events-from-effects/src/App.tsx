import { JSX } from 'react/jsx-runtime';

// ############# Choosing between event handlers and Effects #############

// import { useState, useEffect } from 'react';
// import { createConnection, sendMessage } from './chat';

// const serverUrl = 'https://localhost:1234';

// function ChatRoom({ roomId }: { roomId: string }) {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     return () => connection.disconnect();
//   }, [roomId]);

//   function handleSendClick() {
//     sendMessage(message);
//   }

//   return (
//     <>
//       <h1>Welcome to the {roomId} room!</h1>
//       <input value={message} onChange={e => setMessage(e.target.value)} />
//       <button onClick={handleSendClick}>Send</button>
//     </>
//   );
// }

// export default function App() {
//   const [roomId, setRoomId] = useState('general');
//   const [show, setShow] = useState(false);
//   return (
//     <>
//       <label>
//         Choose the chat room:{' '}
//         <select
//           value={roomId}
//           onChange={e => setRoomId(e.target.value)}
//         >
//           <option value="general">general</option>
//           <option value="travel">travel</option>
//           <option value="music">music</option>
//         </select>
//       </label>
//       <button onClick={() => setShow(!show)}>
//         {show ? 'Close chat' : 'Open chat'}
//       </button>
//       {show && <hr />}
//       {show && <ChatRoom roomId={roomId} />}
//     </>
//   );
// }

// ############# Reactive values and reactive logic #############

// See website

// ############# Extracting non-reactive logic out of Effects #############

// See Website

// ############# Challenge 1 Solution #############

import { useState, useEffect } from 'react';

export default function Timer() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + increment);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [increment]);

  return (
    <>
      <h1>
        Counter: {count}
        <button onClick={() => setCount(0)}>Reset</button>
      </h1>
      <hr />
      <p>
        Every second, increment by:
        <button disabled={increment === 0} onClick={() => {
          setIncrement(i => i - 1);
        }}>–</button>
        <b>{increment}</b>
        <button onClick={() => {
          setIncrement(i => i + 1);
        }}>+</button>
      </p>
    </>
  );
}

// ############# Challenge 2 Solution #############

// See Website

// ############# Challenge 3 Solution #############

// See Website

// ############# Challenge 4 Solution #############

// See Website

