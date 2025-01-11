import { JSX } from 'react/jsx-runtime';

// ############# Dependencies should match the code  #############

// import { useState, useEffect } from 'react';
// import { createConnection } from './chat';

// const serverUrl = 'https://localhost:1234';

// function ChatRoom({ roomId }: { roomId: string }) {
//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     return () => connection.disconnect();
//   }, [roomId]);
//   return <h1>Welcome to the {roomId} room!</h1>;
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
// const roomId = 'music';

// export default function ChatRoom() {
//   useEffect(() => {
//     const connection = createConnection(serverUrl, roomId);
//     connection.connect();
//     return () => connection.disconnect();
//   }, []);
//   return <h1>Welcome to the {roomId} room!</h1>;
// }

// ############# Removing unnecessary dependencies  #############

// See website


// ############# Challenge 1 Solution #############

// import { useState, useEffect } from 'react';

// export default function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log('✅ Creating an interval');
//     const id = setInterval(() => {
//       console.log('⏰ Interval tick');
//       setCount(c => c + 1);
//     }, 1000);
//     return () => {
//       console.log('❌ Clearing an interval');
//       clearInterval(id);
//     };
//   }, []);

//   return <h1>Counter: {count}</h1>
// }

// ############# Challenge 2 Solution #############

// See website

// ############# Challenge 3 Solution #############

import { useState } from 'react';
import ChatRoom from './ChatRoom';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [roomId, setRoomId] = useState('general');
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  const options = {
    serverUrl: serverUrl,
    roomId: roomId
  };

  return (
    <div className={isDark ? 'dark' : 'light'}>
      <button onClick={() => setIsDark(!isDark)}>
        Toggle theme
      </button>
      <label>
        Server URL:{' '}
        <input
          value={serverUrl}
          onChange={e => setServerUrl(e.target.value)}
        />
      </label>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <hr />
      <ChatRoom options={options} />
    </div>
  );
}

// ############# Challenge 4 Solution #############

// See website
