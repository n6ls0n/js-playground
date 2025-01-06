import { JSX } from 'react/jsx-runtime';

// ############# Adding a state variable #############

// import { useState } from 'react';
// import { sculptureList } from './data';

// export default function Gallery() {
//   const [index, setIndex] = useState(0);

//   function handleClick() {
//     setIndex(index + 1);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handleClick}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <img
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//       <p>
//         {sculpture.description}
//       </p>
//     </>
//   );
// }

// ############# Giving a component multiple state variables #############

// import { useState } from 'react';
// import { sculptureList } from './data';

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   function handleNextClick() {
//     setIndex(index + 1);
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handleNextClick}>
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? 'Hide' : 'Show'} details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//     </>
//   );
// }


// ############# Challenge 1 Solution #############

// import { useState } from 'react';
// import { sculptureList } from './data';

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   function handleNextClick() {
//     if (index < sculptureList.length - 1) {
//       return setIndex(index + 1);
//     } else if (index === sculptureList.length - 1) {
//       return setIndex(0);
//     }
//   }

//   function handlePrevClick() {
//     if (index > 0) {
//       return setIndex(index - 1);
//     } else if (index === 0) {
//       return setIndex(sculptureList.length - 1);
//     }
//   }
//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
//       <button onClick={handleNextClick}>
//         Next
//       </button>
//       <button onClick={handlePrevClick}>
//         Prev
//       </button>
//       <h2>
//         <i>{sculpture.name} </i>
//         by {sculpture.artist}
//       </h2>
//       <h3>
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? 'Hide' : 'Show'} details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img
//         src={sculpture.url}
//         alt={sculpture.alt}
//       />
//     </>
//   );
// }


// ############# Challenge 2 Solution #############
// import { useState } from 'react';
// export default function Form() {
//   // let firstName = '';
//   // let lastName = '';

//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
//     // firstName = e.target.value;
//     setFirstName(e.target.value);
//   }

//   function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
//     // lastName = e.target.value;
//     setLastName(e.target.value);
//   }

//   function handleReset() {
//     setFirstName('');
//     setLastName('');
//   }

//   return (
//     <form onSubmit={e => e.preventDefault()}>
//       <input
//         placeholder="First name"
//         value={firstName}
//         onChange={handleFirstNameChange}
//       />
//       <input
//         placeholder="Last name"
//         value={lastName}
//         onChange={handleLastNameChange}
//       />
//       <h1>Hi, {firstName} {lastName}</h1>
//       <button onClick={handleReset}>Reset</button>
//     </form>
//   );
// }

// ############# Challenge 3 Solution #############

// import { useState } from 'react';

// export default function FeedbackForm() {
//   const [isSent, setIsSent] = useState(false);
//   // eslint-disable-next-line
//   const [message, setMessage] = useState('');
//   if (isSent) {
//     return <h1>Thank you!</h1>;
//   } else {
//     return (
//       <form onSubmit={e => {
//         e.preventDefault();
//         alert(`Sending: "${message}"`);
//         setIsSent(true);
//       }}>
//         <textarea
//           placeholder="Message"
//           value={message}
//           onChange={e => setMessage(e.target.value)}
//         />
//         <br />
//         <button type="submit">Send</button>
//       </form>
//     );
//   }
// }

// ############# Challenge 4 Solution #############

export default function FeedbackForm() {
  function handleClick() {
    const userName = prompt('What is your name?');
    if (userName !== null) {
      alert(`Hello, ${userName}!`);
    }
  }

  return (
    <button onClick={handleClick}>
      Greet
    </button>
  );
}
