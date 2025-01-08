// ############# Adding a ref to your component  #############

// import { useRef } from 'react';

// export default function Counter() {
//   let ref = useRef(0);

//   function handleClick() {
//     ref.current = ref.current + 1;
//     alert('You clicked ' + ref.current + ' times!');
//   }

//   return (
//     <button onClick={handleClick}>
//       Click me!
//     </button>
//   );
// }

// ############# Example: building a stopwatch #############

// import { useState } from 'react';

// export default function Stopwatch() {
//   const [startTime, setStartTime] = useState<number | null>(null);
//   const [now, setNow] = useState<number | null>(null);

//   function handleStart() {
//     // Start counting.
//     setStartTime(Date.now());
//     setNow(Date.now());

//     setInterval(() => {
//       // Update the current time every 10ms.
//       setNow(Date.now());
//     }, 10);
//   }

//   let secondsPassed = 0;
//   if (startTime != null && now != null) {
//     secondsPassed = (now - startTime) / 1000;
//   }

//   return (
//     <>
//       <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
//       <button onClick={handleStart}>
//         Start
//       </button>
//     </>
//   );
// }


// #############

// import { useState, useRef } from 'react';

// export default function Stopwatch() {
//   const [startTime, setStartTime] = useState<number | null>(null);
//   const [now, setNow] = useState<number | null>(null);
//   const intervalRef = useRef< NodeJS.Timeout | string | number | undefined>(null);

//   function handleStart() {
//     setStartTime(Date.now());
//     setNow(Date.now());

//     if (intervalRef.current !== null) {
//       clearInterval(intervalRef.current);
//     }
//     intervalRef.current = setInterval(() => {
//       setNow(Date.now());
//     }, 10);
//   }

//   function handleStop() {
//     if (intervalRef.current !== null) {
//         clearInterval(intervalRef.current);
//       }
//   }

//   let secondsPassed = 0;
//   if (startTime != null && now != null) {
//     secondsPassed = (now - startTime) / 1000;
//   }

//   return (
//     <>
//       <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
//       <button onClick={handleStart}>
//         Start
//       </button>
//       <button onClick={handleStop}>
//         Stop
//       </button>
//     </>
//   );
// }


// ############# Differences between refs and state  #############

// import { useState } from 'react';

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <button onClick={handleClick}>
//       You clicked {count} times
//     </button>
//   );
// }

// #############

// import { useRef } from 'react';

// export default function Counter() {
//   let countRef = useRef(0);

//   function handleClick() {
//     // This doesn't re-render the component!
//     countRef.current = countRef.current + 1;
//   }

//   return (
//     <button onClick={handleClick}>
//       You clicked {countRef.current} times
//     </button>
//   );
// }


// ############# Challenge 1 Solution #############

// import { useState, useRef } from 'react';

// export default function Chat() {
//   const [text, setText] = useState('');
//   const [isSending, setIsSending] = useState(false);
//   let timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   function handleSend() {
//     setIsSending(true);
//     timeoutRef.current = setTimeout(() => {
//       alert('Sent!');
//       setIsSending(false);
//     }, 3000);
//   }

//   function handleUndo() {
//     setIsSending(false);
//     if (timeoutRef.current  !== null) {
//       clearTimeout(timeoutRef.current );
//     }
//   }

//   return (
//     <>
//       <input
//         disabled={isSending}
//         value={text}
//         onChange={e => setText(e.target.value)}
//       />
//       <button
//         disabled={isSending}
//         onClick={handleSend}>
//         {isSending ? 'Sending...' : 'Send'}
//       </button>
//       {isSending &&
//         <button onClick={handleUndo}>
//           Undo
//         </button>
//       }
//     </>
//   );
// }

// ############# Challenge 2 Solution #############

// import { useState } from 'react';

// export default function Toggle() {
// //   const isOnRef = useRef(false);

//     const [isOn, setIsOn] = useState(false);

//   return (
//     <button onClick={() => {
//       setIsOn(!isOn);
//     }}>
//       {isOn ? 'On' : 'Off'}
//     </button>
//   );
// }


// ############# Challenge 3 Solution #############

// import { useRef } from 'react';

// interface DebouncedButtonProps {
//   onClick: () => void;
//   children: React.ReactNode;
// }

// function DebouncedButton({ onClick, children }: DebouncedButtonProps) {
//     const timeoutRef = useRef<NodeJS.Timeout | null>(null);
//     return (
//     <button onClick={() => {
//       if (timeoutRef.current !== null) {
//         clearTimeout(timeoutRef.current);
//       }
//       timeoutRef.current = setTimeout(() => {
//         onClick();
//       }, 1000);
//     }}>
//       {children}
//     </button>
//   );
// }

// export default function Dashboard() {
//   return (
//     <>
//       <DebouncedButton
//         onClick={() => alert('Spaceship launched!')}
//       >
//         Launch the spaceship
//       </DebouncedButton>
//       <DebouncedButton
//         onClick={() => alert('Soup boiled!')}
//       >
//         Boil the soup
//       </DebouncedButton>
//       <DebouncedButton
//         onClick={() => alert('Lullaby sung!')}
//       >
//         Sing a lullaby
//       </DebouncedButton>
//     </>
//   )
// }


// ############# Challenge 4 Solution #############


import { useState, useRef } from 'react';


export default function Chat() {
  const [text, setText] = useState('');
  const textRef = useRef(text);

function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
    textRef.current = e.target.value;
}

  function handleSend() {
    setTimeout(() => {
      alert('Sending: ' + textRef.current);
    }, 3000);
  }

  return (
    <>
      <input
        value={text}
        onChange={handleChange}
      />
      <button
        onClick={handleSend}>
        Send
      </button>
    </>
  );
}
