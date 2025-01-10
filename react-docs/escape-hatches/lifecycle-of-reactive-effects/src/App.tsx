import { JSX } from 'react/jsx-runtime';

// ############# The lifecycle of an Effect #############

// import { useState, useEffect } from 'react';
// import { createConnection } from './chat';

// const serverUrl = 'https://localhost:1234';

// function ChatRoom({ roomId }: {roomId: string}) {
//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     return () => connection.disconnect();
//   }, [roomId]);
//   return <h1>Welcome to the {roomId} room!</h1>;
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


// ############# Effects “react” to reactive values #############

// import { useState, useEffect } from 'react';
// import { createConnection } from './chat';

// function ChatRoom({ roomId }: { roomId: string }) {
//   const [serverUrl, setServerUrl] = useState('https://localhost:1234');

//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     return () => connection.disconnect();
//   }, [roomId, serverUrl]);

//   return (
//     <>
//       <label>
//         Server URL:{' '}
//         <input
//           value={serverUrl}
//           onChange={e => setServerUrl(e.target.value)}
//         />
//       </label>
//       <h1>Welcome to the {roomId} room!</h1>
//     </>
//   );
// }

// export default function App() {
//   const [roomId, setRoomId] = useState('general');
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
//       <hr />
//       <ChatRoom roomId={roomId} />
//     </>
//   );
// }

// #############

// import { useState, useEffect } from 'react';
// import { createConnection } from './chat';

// const serverUrl = 'https://localhost:1234';
// const roomId = 'general';

// function ChatRoom() {
//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     return () => connection.disconnect();
//   }, []);
//   return <h1>Welcome to the {roomId} room!</h1>;
// }

// export default function App() {
//   const [show, setShow] = useState(false);
//   return (
//     <>
//       <button onClick={() => setShow(!show)}>
//         {show ? 'Close chat' : 'Open chat'}
//       </button>
//       {show && <hr />}
//       {show && <ChatRoom />}
//     </>
//   );
// }


// ############# Challenge 1 Solution #############
// import { useState, useEffect } from 'react';
// import { createConnection } from './chat';

// const serverUrl = 'https://localhost:1234';

// function ChatRoom({ roomId }: {roomId: string}) {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     return () => connection.disconnect();
//   }, [roomId]);

//   return (
//     <>
//       <h1>Welcome to the {roomId} room!</h1>
//       <input
//         value={message}
//         onChange={e => setMessage(e.target.value)}
//       />
//     </>
//   );
// }

// export default function App() {
//   const [roomId, setRoomId] = useState('general');
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
//       <hr />
//       <ChatRoom roomId={roomId} />
//     </>
//   );
// }

// ############# Challenge 2 Solution #############

// import { useState, useEffect } from 'react';

// export default function App() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [canMove, setCanMove] = useState(true);

//   useEffect(() => {
//     interface Position {
//       x: number;
//       y: number;
//     }

//     function handleMove(e: PointerEvent) {
//       if (canMove) {
//         setPosition({ x: e.clientX, y: e.clientY });
//       }
//     }
//     window.addEventListener('pointermove', handleMove);
//     return () => window.removeEventListener('pointermove', handleMove);
//   }, [canMove]);

//   return (
//     <>
//       <label>
//         <input type="checkbox"
//           checked={canMove}
//           onChange={e => setCanMove(e.target.checked)}
//         />
//         The dot is allowed to move
//       </label>
//       <hr />
//       <div style={{
//         position: 'absolute',
//         backgroundColor: 'pink',
//         borderRadius: '50%',
//         opacity: 0.6,
//         transform: `translate(${position.x}px, ${position.y}px)`,
//         pointerEvents: 'none',
//         left: -20,
//         top: -20,
//         width: 40,
//         height: 40,
//       }} />
//     </>
//   );
// }

// ############# Challenge 3 Solution #############

import { useState, useEffect } from 'react';

export default function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [canMove, setCanMove] = useState(true);

  useEffect(() => {

    function handleMove(e: PointerEvent) {
      if (canMove) {
        setPosition({ x: e.clientX, y: e.clientY });
      }
    }

    window.addEventListener('pointermove', handleMove);
    return () => window.removeEventListener('pointermove', handleMove);
  }, [canMove]);

  return (
    <>
      <label>
        <input type="checkbox"
          checked={canMove}
          onChange={e => setCanMove(e.target.checked)}
        />
        The dot is allowed to move
      </label>
      <hr />
      <div style={{
        position: 'absolute',
        backgroundColor: 'pink',
        borderRadius: '50%',
        opacity: 0.6,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
      }} />
    </>
  );
}

// ############# Challenge 4 Solution #############

// See Website

// ############# Challenge 5 Solution #############

// See Website
