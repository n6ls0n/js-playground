// ############# Challenge 1 Solution #############

// import { useState, useEffect } from 'react';

// export function useCounter() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     const id = setInterval(() => {
//       setCount(c => c + 1);
//     }, 1000);
//     return () => clearInterval(id);
//   }, []);
//   return count;
// }

// ############# Challenge 2 Solution #############

// import { useState, useEffect } from 'react';

// export function useCounter(delay: number) {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     const id = setInterval(() => {
//       setCount(c => c + 1);
//     }, delay);
//     return () => clearInterval(id);
//   }, [delay]);
//   return count;
// }

// ############# Challenge 3 Solution #############

import { useState } from 'react';
import { useInterval } from './useInterval';

export function useCounter(delay: number) {
  const [count, setCount] = useState(0);
  useInterval({
    onTick: () => {
      setCount(c => c + 1);
    },
    delay
  });
  return count;
}
