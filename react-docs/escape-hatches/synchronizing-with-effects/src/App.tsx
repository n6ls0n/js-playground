import { JSX } from 'react/jsx-runtime';

// ############# How to write an Effect #############

// interface VideoPlayerProps {
//   src: string;
//   isPlaying: boolean;
// }

// function VideoPlayer({ src, isPlaying }: VideoPlayerProps) {
//   const ref = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     if (ref.current) {
//       if (isPlaying) {
//         ref.current.play();
//       } else {
//         ref.current.pause();
//       }
//     }
//   });

//   return <video ref={ref} src={src} loop playsInline />;
// }

// export default function App() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   return (
//     <>
//       <button onClick={() => setIsPlaying(!isPlaying)}>
//         {isPlaying ? 'Pause' : 'Play'}
//       </button>
//       <VideoPlayer
//         isPlaying={isPlaying}
//         src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//       />
//     </>
//   );
// }


// #############

// import { useState, useRef, useEffect } from 'react';

// interface VideoPlayerProps {
//   src: string;
//   isPlaying: boolean;
// }

// function VideoPlayer({ src, isPlaying }: VideoPlayerProps) {
//   const ref = useRef<HTMLVideoElement>(null);

//   useEffect(() => {
//     if (isPlaying) {
//       console.log('Calling video.play()');
//       ref.current?.play();
//     } else {
//       console.log('Calling video.pause()');
//       ref.current?.pause();
//     }
//   }, [isPlaying]);

//   return <video ref={ref} src={src} loop playsInline />;
// }

// export default function App() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [text, setText] = useState('');
//   return (
//     <>
//       <input value={text} onChange={e => setText(e.target.value)} />
//       <button onClick={() => setIsPlaying(!isPlaying)}>
//         {isPlaying ? 'Pause' : 'Play'}
//       </button>
//       <VideoPlayer
//         isPlaying={isPlaying}
//         src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//       />
//     </>
//   );
// }

// #############

// See website

// ############# Putting it all together #############

// import { useState, useEffect } from 'react';

// function Playground() {
//   const [text, setText] = useState('a');

//   useEffect(() => {
//     function onTimeout() {
//       console.log('⏰ ' + text);
//     }

//     console.log('🔵 Schedule "' + text + '" log');
//     const timeoutId = setTimeout(onTimeout, 3000);

//     return () => {
//       console.log('🟡 Cancel "' + text + '" log');
//       clearTimeout(timeoutId);
//     };
//   }, [text]);

//   return (
//     <>
//       <label>
//         What to log:{' '}
//         <input
//           value={text}
//           onChange={e => setText(e.target.value)}
//         />
//       </label>
//       <h1>{text}</h1>
//     </>
//   );
// }

// export default function App() {
//   const [show, setShow] = useState(false);
//   return (
//     <>
//       <button onClick={() => setShow(!show)}>
//         {show ? 'Unmount' : 'Mount'} the component
//       </button>
//       {show && <hr />}
//       {show && <Playground />}
//     </>
//   );
// }


// ############# Challenge 1 Solution #############

import { useEffect, useRef } from 'react';

interface MyInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function MyInput({ value, onChange }: MyInputProps) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
    />
  );
}

// Replace line 8 in index.tsx with the code below
// root.render(<App value="" onChange={() => {}} />);


// ############# Challenge 2 Solution #############

// import { useEffect, useRef } from 'react';

// interface MyInputProps {
//   shouldFocus: boolean;
//   value: string;
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }

// export default function MyInput({ shouldFocus, value, onChange }: MyInputProps) {
//   const ref = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     if (shouldFocus) {
//       ref.current?.focus();
//     }
//   }, [shouldFocus]);

//   return (
//     <input
//       ref={ref}
//       value={value}
//       onChange={onChange}
//     />
//   );
// }
// Replace line 8 in index.tsx with the code below
// root.render(<App shouldFocus={true} value="" onChange={() => {}} />);


// ############# Challenge 3 Solution #############

// import { useState, useEffect } from 'react';

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     function onTick() {
//       setCount(c => c + 1);
//     }

//     setInterval(onTick, 1000);
//   }, []);

//   return <h1>{count}</h1>;
// }


// ############# Challenge 4 Solution #############

// See website
