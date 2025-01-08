import { JSX } from 'react/jsx-runtime';

// ############# State is tied to a position in the render tree #############

// import { useState } from 'react';

// export default function App() {
//   const [showB, setShowB] = useState(true);
//   return (
//     <div>
//       <Counter />
//       {showB && <Counter />}
//       <label>
//         <input
//           type="checkbox"
//           checked={showB}
//           onChange={e => {
//             setShowB(e.target.checked)
//           }}
//         />
//         Render the second counter
//       </label>
//     </div>
//   );
// }

// function Counter() {
//   const [score, setScore] = useState(0);
//   const [hover, setHover] = useState(false);

//   let className = 'counter';
//   if (hover) {
//     className += ' hover';
//   }

//   return (
//     <div
//       className={className}
//       onPointerEnter={() => setHover(true)}
//       onPointerLeave={() => setHover(false)}
//     >
//       <h1>{score}</h1>
//       <button onClick={() => setScore(score + 1)}>
//         Add one
//       </button>
//     </div>
//   );
// }


// ############# Same component at the same position preserves state #############


// import { useState } from 'react';

// export default function App() {
//   const [isFancy, setIsFancy] = useState(false);
//   return (
//     <div>
//       {isFancy ? (
//         <Counter isFancy={true} />
//       ) : (
//         <Counter isFancy={false} />
//       )}
//       <label>
//         <input
//           type="checkbox"
//           checked={isFancy}
//           onChange={e => {
//             setIsFancy(e.target.checked)
//           }}
//         />
//         Use fancy styling
//       </label>
//     </div>
//   );
// }

// function Counter({ isFancy } : { isFancy: boolean }) {
//   const [score, setScore] = useState(0);
//   const [hover, setHover] = useState(false);

//   let className = 'counter';
//   if (hover) {
//     className += ' hover';
//   }
//   if (isFancy) {
//     className += ' fancy';
//   }

//   return (
//     <div
//       className={className}
//       onPointerEnter={() => setHover(true)}
//       onPointerLeave={() => setHover(false)}
//     >
//       <h1>{score}</h1>
//       <button onClick={() => setScore(score + 1)}>
//         Add one
//       </button>
//     </div>
//   );
// }

// Inspect element in the console

// ############# Different components at the same position reset state #############

// import { useState } from 'react';

// export default function App() {
//   const [isPaused, setIsPaused] = useState(false);
//   return (
//     <div>
//       {isPaused ? (
//         <p>See you later!</p>
//       ) : (
//         <Counter />
//       )}
//       <label>
//         <input
//           type="checkbox"
//           checked={isPaused}
//           onChange={e => {
//             setIsPaused(e.target.checked)
//           }}
//         />
//         Take a break
//       </label>
//     </div>
//   );
// }

// function Counter() {
//   const [score, setScore] = useState(0);
//   const [hover, setHover] = useState(false);

//   let className = 'counter';
//   if (hover) {
//     className += ' hover';
//   }

//   return (
//     <div
//       className={className}
//       onPointerEnter={() => setHover(true)}
//       onPointerLeave={() => setHover(false)}
//     >
//       <h1>{score}</h1>
//       <button onClick={() => setScore(score + 1)}>
//         Add one
//       </button>
//     </div>
//   );
// }

// #############

// import { useState } from 'react';

// export default function App() {
//   const [isFancy, setIsFancy] = useState(false);
//   return (
//     <div>
//       {isFancy ? (
//         <div>
//           <Counter isFancy={true} />
//         </div>
//       ) : (
//         <section>
//           <Counter isFancy={false} />
//         </section>
//       )}
//       <label>
//         <input
//           type="checkbox"
//           checked={isFancy}
//           onChange={e => {
//             setIsFancy(e.target.checked)
//           }}
//         />
//         Use fancy styling
//       </label>
//     </div>
//   );
// }

// function Counter({ isFancy }:{ isFancy: boolean }) {
//   const [score, setScore] = useState(0);
//   const [hover, setHover] = useState(false);

//   let className = 'counter';
//   if (hover) {
//     className += ' hover';
//   }
//   if (isFancy) {
//     className += ' fancy';
//   }

//   return (
//     <div
//       className={className}
//       onPointerEnter={() => setHover(true)}
//       onPointerLeave={() => setHover(false)}
//     >
//       <h1>{score}</h1>
//       <button onClick={() => setScore(score + 1)}>
//         Add one
//       </button>
//     </div>
//   );
// }

// ############# Resetting state at the same position  #############

// import { useState } from 'react';

// export default function Scoreboard() {
//   const [isPlayerA, setIsPlayerA] = useState(true);
//   return (
//     <div>
//       {isPlayerA &&
//         <Counter person="Taylor" />
//       }
//       {!isPlayerA &&
//         <Counter person="Sarah" />
//       }
//       <button onClick={() => {
//         setIsPlayerA(!isPlayerA);
//       }}>
//         Next player!
//       </button>
//     </div>
//   );
// }

// function Counter({ person } : { person: string }) {
//   const [score, setScore] = useState(0);
//   const [hover, setHover] = useState(false);

//   let className = 'counter';
//   if (hover) {
//     className += ' hover';
//   }

//   return (
//     <div
//       className={className}
//       onPointerEnter={() => setHover(true)}
//       onPointerLeave={() => setHover(false)}
//     >
//       <h1>{person}'s score: {score}</h1>
//       <button onClick={() => setScore(score + 1)}>
//         Add one
//       </button>
//     </div>
//   );
// }

// #############

// import { useState } from 'react';

// export default function Scoreboard() {
//   const [isPlayerA, setIsPlayerA] = useState(true);
//   return (
//     <div>
//       {isPlayerA ? (
//         <Counter key="Taylor" person="Taylor" />
//       ) : (
//         <Counter key="Sarah" person="Sarah" />
//       )}
//       <button onClick={() => {
//         setIsPlayerA(!isPlayerA);
//       }}>
//         Next player!
//       </button>
//     </div>
//   );
// }

// function Counter({ person } : { person: string }) {
//   const [score, setScore] = useState(0);
//   const [hover, setHover] = useState(false);

//   let className = 'counter';
//   if (hover) {
//     className += ' hover';
//   }

//   return (
//     <div
//       className={className}
//       onPointerEnter={() => setHover(true)}
//       onPointerLeave={() => setHover(false)}
//     >
//       <h1>{person}'s score: {score}</h1>
//       <button onClick={() => setScore(score + 1)}>
//         Add one
//       </button>
//     </div>
//   );
// }


// ############# Challenge 1 Solution #############

// import { useState } from 'react';

// export default function App() {
//   const [showHint, setShowHint] = useState(false);

//     return (
//       <div>
//         {showHint ? (
//           <p><i>Hint: Your favorite city?</i></p>
//         ) : null}
//         <Form />
//         <button onClick={() => {
//           setShowHint(!showHint);
//         }}>{showHint ? 'Hide hint' : 'Show hint'}</button>
//       </div>
//     );
//  }


// function Form() {
//   const [text, setText] = useState('');
//   return (
//     <textarea
//       value={text}
//       onChange={e => setText(e.target.value)}
//     />
//   );
// }

// ############# Challenge 2 Solution #############

// import { useState } from 'react';

// export default function App() {
//   const [reverse, setReverse] = useState(false);
//   let checkbox = (
//     <label>
//       <input
//         type="checkbox"
//         checked={reverse}
//         onChange={e => setReverse(e.target.checked)}
//       />
//       Reverse order
//     </label>
// );
//   if (reverse) {
//     return (
//       <>
//         <Field key= "lastname" label="Last name" />
//         <Field key= "firstname" label="First name" />
//         {checkbox}
//       </>
//     );
//   } else {
//     return (
//       <>
//         <Field key= "firstname" label="First name" />
//         <Field key= "lastname"label="Last name" />
//         {checkbox}
//       </>
//     );
//   }
// }

// function Field({ label }: { label: string }) {
//   const [text, setText] = useState('');
//   return (
//     <label>
//       {label}:{' '}
//       <input
//         type="text"
//         value={text}
//         placeholder={label}
//         onChange={e => setText(e.target.value)}
//       />
//     </label>
//   );
// }

// ############# Challenge 3 Solution #############

// import { useState } from 'react';
// import ContactList from './ContactList';
// import EditContact from './EditContact';
// import {Contact} from './ContactList';

// export default function ContactManager() {
//   const [
//     contacts,
//     setContacts
//   ] = useState(initialContacts);
//   const [
//     selectedId,
//     setSelectedId
//   ] = useState(0);
//   const selectedContact = contacts.find(c =>
//     c.id === selectedId
//   );

//   function handleSave(updatedData: Contact) {
//     const nextContacts = contacts.map(c => {
//       if (c.id === updatedData.id) {
//         return updatedData;
//       } else {
//         return c;
//       }
//     });
//     setContacts(nextContacts);
//   }

//   return (
//     <div>
//       <ContactList
//         contacts={contacts}
//         selectedId={selectedId}
//         onSelect={id => setSelectedId(id)}
//       />
//       <hr />
//       <EditContact
//         key={selectedId}
//         initialData={selectedContact || { id: 0, name: '', email: '' }}
//         onSave={handleSave}
//       />
//     </div>
//   )
// }

// const initialContacts = [
//   { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
//   { id: 1, name: 'Alice', email: 'alice@mail.com' },
//   { id: 2, name: 'Bob', email: 'bob@mail.com' }
// ];


// ############# Challenge 4 Solution #############

// import { useState } from 'react';

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const hasNext = index < images.length - 1;

//   function handleClick() {
//     if (hasNext) {
//       setIndex(index + 1);
//     } else {
//       setIndex(0);
//     }
//   }

//   let image = images[index];
//   return (
//     <>
//       <button onClick={handleClick}>
//         Next
//       </button>
//       <h3>
//         Image {index + 1} of {images.length}
//       </h3>
//       <img key={image.src} src={image.src} />
//       <p>
//         {image.place}
//       </p>
//     </>
//   );
// }

// let images = [{
//   place: 'Penang, Malaysia',
//   src: 'https://i.imgur.com/FJeJR8M.jpg'
// }, {
//   place: 'Lisbon, Portugal',
//   src: 'https://i.imgur.com/dB2LRbj.jpg'
// }, {
//   place: 'Bilbao, Spain',
//   src: 'https://i.imgur.com/z08o2TS.jpg'
// }, {
//   place: 'Valparaíso, Chile',
//   src: 'https://i.imgur.com/Y3utgTi.jpg'
// }, {
//   place: 'Schwyz, Switzerland',
//   src: 'https://i.imgur.com/JBbMpWY.jpg'
// }, {
//   place: 'Prague, Czechia',
//   src: 'https://i.imgur.com/QwUKKmF.jpg'
// }, {
//   place: 'Ljubljana, Slovenia',
//   src: 'https://i.imgur.com/3aIiwfm.jpg'
// }];

// ############# Challenge 5 Solution #############

import { useState } from 'react';
import Contact from './Contact';

export default function ContactList() {
  const [reverse, setReverse] = useState(false);

  const displayedContacts = [...contacts];
  if (reverse) {
    displayedContacts.reverse();
  }

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={reverse}
          onChange={e => {
            setReverse(e.target.checked)
          }}
        />{' '}
        Show in reverse order
      </label>
      <ul>
        {displayedContacts.map((contact, i) =>
          <li key={i}>
            <Contact key={i} contact={contact} />
          </li>
        )}
      </ul>
    </>
  );
}

const contacts = [
  { id: 0, name: 'Alice', email: 'alice@mail.com' },
  { id: 1, name: 'Bob', email: 'bob@mail.com' },
  { id: 2, name: 'Taylor', email: 'taylor@mail.com' }
];

