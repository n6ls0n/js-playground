import { JSX } from 'react/jsx-runtime';

// ############# Custom Hooks: Sharing logic between components #############

// import { useState, useEffect } from 'react';

// export default function StatusBar() {
//   const [isOnline, setIsOnline] = useState(true);
//   useEffect(() => {
//     function handleOnline() {
//       setIsOnline(true);
//     }
//     function handleOffline() {
//       setIsOnline(false);
//     }
//     window.addEventListener('online', handleOnline);
//     window.addEventListener('offline', handleOffline);
//     return () => {
//       window.removeEventListener('online', handleOnline);
//       window.removeEventListener('offline', handleOffline);
//     };
//   }, []);

//   return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
// }


// #############

// import { useState, useEffect } from 'react';

// export default function SaveButton() {
//   const [isOnline, setIsOnline] = useState(true);
//   useEffect(() => {
//     function handleOnline() {
//       setIsOnline(true);
//     }
//     function handleOffline() {
//       setIsOnline(false);
//     }
//     window.addEventListener('online', handleOnline);
//     window.addEventListener('offline', handleOffline);
//     return () => {
//       window.removeEventListener('online', handleOnline);
//       window.removeEventListener('offline', handleOffline);
//     };
//   }, []);

//   function handleSaveClick() {
//     console.log('✅ Progress saved');
//   }

//   return (
//     <button disabled={!isOnline} onClick={handleSaveClick}>
//       {isOnline ? 'Save progress' : 'Reconnecting...'}
//     </button>
//   );
// }


// #############

// import { useOnlineStatus } from './useOnlineStatus';

// function StatusBar() {
//   const isOnline = useOnlineStatus();
//   return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
// }

// function SaveButton() {
//   const isOnline = useOnlineStatus();

//   function handleSaveClick() {
//     console.log('✅ Progress saved');
//   }

//   return (
//     <button disabled={!isOnline} onClick={handleSaveClick}>
//       {isOnline ? 'Save progress' : 'Reconnecting...'}
//     </button>
//   );
// }

// export default function App() {
//   return (
//     <>
//       <SaveButton />
//       <StatusBar />
//     </>
//   );
// }

// #############

// import { useFormInput } from './useFormInput';

// export default function Form() {
//   const firstNameProps = useFormInput('Mary');
//   const lastNameProps = useFormInput('Poppins');

//   return (
//     <>
//       <label>
//         First name:
//         <input {...firstNameProps} />
//       </label>
//       <label>
//         Last name:
//         <input {...lastNameProps} />
//       </label>
//       <p><b>Good morning, {firstNameProps.value} {lastNameProps.value}.</b></p>
//     </>
//   );
// }


// ############# Passing reactive values between Hooks #############

// See website

// ############# When to use custom Hooks #############

// See website

// ############# Challenge 1 Solution #############

// import { useCounter } from './useCounter';

// export default function Counter() {
//   const count = useCounter();
//   return <h1>Seconds passed: {count}</h1>;
// }

// ############# Challenge 2 Solution #############

// import { useState } from 'react';
// import { useCounter } from './useCounter';

// export default function Counter() {
//   const [delay, setDelay] = useState(1000);
//   const count = useCounter(delay);
//   return (
//     <>
//       <label>
//         Tick duration: {delay} ms
//         <br />
//         <input
//           type="range"
//           value={delay}
//           min="10"
//           max="2000"
//           onChange={e => setDelay(Number(e.target.value))}
//         />
//       </label>
//       <hr />
//       <h1>Ticks: {count}</h1>
//     </>
//   );
// }

// ############# Challenge 3 Solution #############

// import { useCounter } from './useCounter';

// export default function Counter() {
//   const count = useCounter(1000);
//   return <h1>Seconds passed: {count}</h1>;
// }

// ############# Challenge 4 Solution #############

// See website

// ############# Challenge 5 Solution #############

import { useState, useEffect } from 'react';
import { usePointerPosition } from './usePointerPosition';

interface Position {
    x: number;
    y: number;
}

function useDelayedValue<T>(value: T, delay: number): T {
    const [delayedValue, setDelayedValue] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDelayedValue(value);
        }, delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return delayedValue;
}

export default function Canvas() {
  const pos1 = usePointerPosition();
  const pos2 = useDelayedValue(pos1, 100);
  const pos3 = useDelayedValue(pos2, 200);
  const pos4 = useDelayedValue(pos3, 100);
  const pos5 = useDelayedValue(pos3, 50);
  return (
    <>
      <Dot position={pos1} opacity={1} />
      <Dot position={pos2} opacity={0.8} />
      <Dot position={pos3} opacity={0.6} />
      <Dot position={pos4} opacity={0.4} />
      <Dot position={pos5} opacity={0.2} />
    </>
  );
}

function Dot({ position, opacity }: { position: Position; opacity: number }) {
  return (
    <div style={{
      position: 'absolute',
      backgroundColor: 'pink',
      borderRadius: '50%',
      opacity,
      transform: `translate(${position.x}px, ${position.y}px)`,
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
    }} />
  );
}

