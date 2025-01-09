// ############# Getting a ref to the node  #############

// import { useRef } from 'react';

// export default function Form() {
//   const inputRef = useRef<HTMLInputElement>(null);

//   function handleClick() {
//     inputRef.current?.focus();
//   }

//   return (
//     <>
//       <input ref={inputRef} />
//       <button onClick={handleClick}>
//         Focus the input
//       </button>
//     </>
//   );
// }

// #############

// import { useRef } from 'react';

// export default function CatFriends() {
//   const firstCatRef = useRef<HTMLImageElement>(null);
//   const secondCatRef = useRef<HTMLImageElement>(null);
//   const thirdCatRef = useRef<HTMLImageElement>(null);

//   function handleScrollToFirstCat() {
//     if (firstCatRef.current) {
//       firstCatRef.current.scrollIntoView({
//         behavior: 'smooth',
//         block: 'nearest',
//         inline: 'center'
//       });
//     }
//   }

//   function handleScrollToSecondCat() {
//     if (secondCatRef.current) {
//       secondCatRef.current.scrollIntoView({
//         behavior: 'smooth',
//         block: 'nearest',
//         inline: 'center'
//       });
//     }
//   }

//   function handleScrollToThirdCat() {
//     if (thirdCatRef.current) {
//       thirdCatRef.current.scrollIntoView({
//         behavior: 'smooth',
//         block: 'nearest',
//         inline: 'center'
//       });
//     }
//   }

//   return (
//     <>
//       <nav>
//         <button onClick={handleScrollToFirstCat}>
//           Neo
//         </button>
//         <button onClick={handleScrollToSecondCat}>
//           Millie
//         </button>
//         <button onClick={handleScrollToThirdCat}>
//           Bella
//         </button>
//       </nav>
//       <div>
//         <ul>
//           <li>
//             <img
//               src="https://placecats.com/neo/300/200"
//               alt="Neo"
//               ref={firstCatRef}
//             />
//           </li>
//           <li>
//             <img
//               src="https://placecats.com/millie/200/200"
//               alt="Millie"
//               ref={secondCatRef}
//             />
//           </li>
//           <li>
//             <img
//               src="https://placecats.com/bella/199/200"
//               alt="Bella"
//               ref={thirdCatRef}
//             />
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

// Depending on your screen size, you have to minimize the page so that the scrolling effect is visible

// ############# When React attaches the refs  #############

// import { useRef, ForwardedRef } from 'react';

// function MyInput({ ref }: { ref: ForwardedRef<HTMLInputElement> }) {
//   return <input ref={ref} />;
// }

// export default function MyForm() {
//   const inputRef = useRef<HTMLInputElement>(null);

//   function handleClick() {
//     inputRef.current?.focus();
//   }

//   return (
//     <>
//       <MyInput ref={inputRef} />
//       <button onClick={handleClick}>
//         Focus the input
//       </button>
//     </>
//   )
// };


// ############# Challenge 1 Solution #############

// import { useState, useRef } from 'react';

// export default function VideoPlayer() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef<HTMLVideoElement>(null);

//   function handleClick() {
//     const nextIsPlaying = !isPlaying;
//     setIsPlaying(nextIsPlaying);

//     if (nextIsPlaying) {
//       videoRef.current?.play();
//     } else {
//       videoRef.current?.pause();
//     }
//   }

//   return (
//     <>
//       <button onClick={handleClick}>
//         {isPlaying ? 'Pause' : 'Play'}

//       </button>
//       <video width="250" ref={videoRef}>
//         <source
//           src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//           type="video/mp4"
//         />
//       </video>
//     </>
//   )
// }

// ############# Challenge 2 Solution #############

// import { useRef } from 'react';

// export default function Page() {

//   const inputRef = useRef<HTMLInputElement>(null);

//   function handleClick() {
//     inputRef.current?.focus();
//   }

//     return (
//       <>
//         <nav>
//           <button
//             onClick={handleClick}
//             >Search</button>
//         </nav>
//         <input
//         ref={inputRef}
//           placeholder="Looking for something?"
//         />
//       </>
//     );
//   }

// ############# Challenge 3 Solution #############
// import { useRef, useState } from 'react';
// import { flushSync } from 'react-dom';

// export default function CatFriends() {
//   const selectedRef = useRef<HTMLLIElement>(null);
//   const [index, setIndex] = useState(0);

//   return (
//     <>
//       <nav>
//         <button onClick={() => {
//           flushSync(() => {
//             if (index < catList.length - 1) {
//               setIndex(index + 1);
//             } else {
//               setIndex(0);
//             }
//           });
//           if (selectedRef.current) {
//             selectedRef.current.scrollIntoView({
//               behavior: 'smooth',
//               block: 'nearest',
//               inline: 'center'
//             });
//           }
//         }}>
//           Next
//         </button>
//       </nav>
//       <div>
//         <ul>
//           {catList.map((cat, i) => (
//             <li
//               key={cat.id}
//               ref={index === i ?
//                 selectedRef :
//                 null
//               }
//             >
//               <img
//                 className={
//                   index === i ?
//                     'active'
//                     : ''
//                 }
//                 src={cat.imageUrl}
//                 alt={'Cat #' + cat.id}
//               />
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }

// interface Cat {
//     id: number;
//     imageUrl: string;
// }

// const catList: Cat[] = [];
// for (let i = 0; i < 10; i++) {
//   catList.push({
//     id: i,
//     imageUrl: 'https://loremflickr.com/250/200/cat?lock=' + i
//   });
// }

// ############# Challenge 4 Solution #############

import { useRef } from 'react';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';

export default function Page() {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <nav>
        <SearchButton onClick={() => {
          inputRef.current?.focus();
        }} />
      </nav>
      <SearchInput ref={inputRef} />
    </>
  );
}
