import { JSX } from 'react/jsx-runtime';

// ############# Challenge 1 Solution #############
// export default function Clock() {
//   const time = new Date();
//   let hours = time.getHours();
//   let className: string;
//   if (hours >= 0 && hours <= 6) {
//     className = 'night';
//   } else {
//     className = 'day';
//   }
//   return (
//     <h1 className={className}>
//       {time.toLocaleTimeString()}
//     </h1>
//   );
// }


// ############# Challenge 2 Solution #############

import Profile from './Profile';

export default function App() {
  return (
    <>
      <Profile person={{
        imageId: 'lrWQx8l',
        name: 'Subrahmanyan Chandrasekhar',
      }} />
      <Profile person={{
        imageId: 'MK3eW3A',
        name: 'Creola Katherine Johnson',
      }} />
    </>
  )
}
// ############# Challenge 3 Solution #############

// See website
