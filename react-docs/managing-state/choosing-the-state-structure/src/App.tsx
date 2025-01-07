import { JSX } from 'react/jsx-runtime';

// ############# Group related state #############
// import { useState } from 'react';

// export default function MovingDot() {
//   const [position, setPosition] = useState({
//     x: 0,
//     y: 0
//   });
//   return (
//     <div
//       onPointerMove={e => {
//         setPosition({
//           x: e.clientX,
//           y: e.clientY
//         });
//       }}
//       style={{
//         position: 'relative',
//         width: '100vw',
//         height: '100vh',
//       }}>
//       <div style={{
//         position: 'absolute',
//         backgroundColor: 'red',
//         borderRadius: '50%',
//         transform: `translate(${position.x}px, ${position.y}px)`,
//         left: -10,
//         top: -10,
//         width: 20,
//         height: 20,
//       }} />
//     </div>
//   )
// }

// ############# Avoid contradictions in state #############

// import { useState } from 'react';

// export default function FeedbackForm() {
//   const [text, setText] = useState('');
//   const [isSending, setIsSending] = useState(false);
//   const [isSent, setIsSent] = useState(false);

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setIsSending(true);
//     await sendMessage(text);
//     setIsSending(false);
//     setIsSent(true);
//   }

//   if (isSent) {
//     return <h1>Thanks for feedback!</h1>
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <p>How was your stay at The Prancing Pony?</p>
//       <textarea
//         disabled={isSending}
//         value={text}
//         onChange={e => setText(e.target.value)}
//       />
//       <br />
//       <button
//         disabled={isSending}
//         type="submit"
//       >
//         Send
//       </button>
//       {isSending && <p>Sending...</p>}
//     </form>
//   );
// }

// // Pretend to send a message.
// function sendMessage(text: string) {
//   return new Promise(resolve => {
//     setTimeout(resolve, 2000);
//   });
// }

// ############# Avoid redundant state #############

// import { useState } from 'react';

// export default function Form() {
//   const [firstName, setFirstName] = useState('Nelson');
//   const [lastName, setLastName] = useState('Nwauche');

//   const fullName = firstName + ' ' + lastName;

//   function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
//     setFirstName(e.target.value);
//   }

//   function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
//     setLastName(e.target.value);
//   }

//   return (
//     <>
//       <h2>Let’s check you in</h2>
//       <label>
//         First name:{' '}
//         <input
//           value={firstName}
//           onChange={handleFirstNameChange}
//         />
//       </label>
//       <label>
//         Last name:{' '}
//         <input
//           value={lastName}
//           onChange={handleLastNameChange}
//         />
//       </label>
//       <p>
//         Your ticket will be issued to: <b>{fullName}</b>
//       </p>
//     </>
//   );
// }

// ############# Avoid duplication in state #############

// import { useState } from 'react';

// const initialItems = [
//   { title: 'pretzels', id: 0 },
//   { title: 'crispy seaweed', id: 1 },
//   { title: 'granola bar', id: 2 },
// ];

// export default function Menu() {
//   const [items, setItems] = useState(initialItems);
//   const [selectedId, setSelectedId] = useState(0);

//   const selectedItem = items.find(item =>
//     item.id === selectedId
//   );

//   function handleItemChange(id: number, e: React.ChangeEvent<HTMLInputElement>) {
//     setItems(items.map(item => {
//       if (item.id === id) {
//         return {
//           ...item,
//           title: e.target.value,
//         };
//       } else {
//         return item;
//       }
//     }));
//   }

//   return (
//     <>
//       <h2>What's your travel snack?</h2>
//       <ul>
//         {items.map((item, index) => (
//           <li key={item.id}>
//             <input
//               value={item.title}
//               onChange={e => {
//                 handleItemChange(item.id, e)
//               }}
//             />
//             {' '}
//             <button onClick={() => {
//               setSelectedId(item.id);
//             }}>Choose</button>
//           </li>
//         ))}
//       </ul>
//       <p>You picked {selectedItem ? selectedItem.title : 'nothing'}.</p>
//     </>
//   );
// }

// ############# Avoid deeply nested state #############

// import { useState } from 'react';
// import { initialTravelPlan } from './places';

// export default function TravelPlan() {
//   const [plan, setPlan] = useState<Record<number, { title: string; childIds: number[] }>>(initialTravelPlan);

//   function handleComplete(parentId: number, childId: number) {
//     const parent = plan[parentId];
//     // Create a new version of the parent place
//     // that doesn't include this child ID.
//     const nextParent = {
//       ...parent,
//       childIds: parent.childIds
//         .filter(id => id !== childId)
//     };
//     // Update the root state object...
//     setPlan({
//       ...plan,
//       // ...so that it has the updated parent.
//       [parentId]: nextParent
//     });
//   }

//   const root = plan[0];
//   const planetIds = root.childIds;
//   return (
//     <>
//       <h2>Places to visit</h2>
//       <ol>
//         {planetIds.map(id => (
//           <PlaceTree
//             key={id}
//             id={id}
//             parentId={0}
//             placesById={plan}
//             onComplete={handleComplete}
//           />
//         ))}
//       </ol>
//     </>
//   );
// }

// interface PlaceTreeProps {
//   id: number;
//   parentId: number;
//   placesById: Record<number, { title: string; childIds: number[] }>;
//   onComplete: (parentId: number, childId: number) => void;
// }

// function PlaceTree({ id, parentId, placesById, onComplete }: PlaceTreeProps) {
//   const place = placesById[id];
//   const childIds = place.childIds;
//   return (
//     <li>
//       {place.title}
//       <button onClick={() => {
//         onComplete(parentId, id);
//       }}>
//         Complete
//       </button>
//       {childIds.length > 0 &&
//         <ol>
//           {childIds.map(childId => (
//             <PlaceTree
//               key={childId}
//               id={childId}
//               parentId={id}
//               placesById={placesById}
//               onComplete={onComplete}
//             />
//           ))}
//         </ol>
//       }
//     </li>
//   );
// }

// ############# Challenge 1 Solution #############

// See website

// ############# Challenge 2 Solution #############

// See website

// ############# Challenge 3 Solution #############

// import { useState } from 'react';
// import { initialLetters } from './data';
// import Letter from './Letter';

// export default function MailClient() {
//   const [letters, setLetters] = useState(initialLetters);
//   const [highlightedId, setHighlightedId] = useState<number|null>(null);

//   function handleHover(letterId: number) {
//     setHighlightedId(letterId);
//   }

//   function handleStar(starredId: number) {
//     setLetters(letters.map(letter => {
//       if (letter.id === starredId) {
//         return {
//           ...letter,
//           isStarred: !letter.isStarred
//         };
//       } else {
//         return letter;
//       }
//     }));
//   }

//   return (
//     <>
//       <h2>Inbox</h2>
//       <ul>
//         {letters.map(letter => (
//           <Letter
//             key={letter.id}
//             letter={letter}
//             isHighlighted={
//               letter.id === highlightedId
//             }
//             onHover={handleHover}
//             onToggleStar={handleStar}
//           />
//         ))}
//       </ul>
//     </>
//   );
// }

//  Inspect the elements in the list to see the effects

// ############# Challenge 4 Solution #############

import { useState } from 'react';
import { letters } from './data2';
import Letter from './Letter2';

export default function MailClient() {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const selectedCount = selectedIds.length;

  function handleToggle(toggledId: number) {
    if (selectedIds.includes(toggledId)) {
      setSelectedIds(selectedIds.filter(id => id !== toggledId));
    } else {
      setSelectedIds([...selectedIds, toggledId]);
    }
  }
  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={
              selectedIds.includes(letter.id)
            }
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>
            You selected {selectedCount} letters
          </b>
        </p>
      </ul>
    </>
  );
}
