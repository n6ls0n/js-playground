import { JSX } from 'react/jsx-runtime';

// ############# Step 1: Identify your component’s different visual states  #############
// export default function Form({
//   status = 'success'
// }) {
//   if (status === 'success') {
//     return <h1>That's right!</h1>
//   }
//   return (
//     <>
//       <h2>City quiz</h2>
//       <p>
//         In which city is there a billboard that turns air into drinkable water?
//       </p>
//       <form>
//         <textarea />
//         <br />
//         <button>
//           Submit
//         </button>
//       </form>
//     </>
//   )
// }

// #############

// export default function Form({
//   // Try 'submitting', 'error', 'success':
//   status = 'submitting'
// }) {
//   if (status === 'success') {
//     return <h1>That's right!</h1>
//   }
//   return (
//     <>
//       <h2>City quiz</h2>
//       <p>
//         In which city is there a billboard that turns air into drinkable water?
//       </p>
//       <form>
//         <textarea disabled={
//           status === 'submitting'
//         } />
//         <br />
//         <button disabled={
//           status === 'empty' ||
//           status === 'submitting'
//         }>
//           Submit
//         </button>
//         {status === 'error' &&
//           <p className="Error">
//             Good guess but a wrong answer. Try again!
//           </p>
//         }
//       </form>
//       </>
//   );
// }


// ############# Step 5: Connect the event handlers to set state #############

// import { useState } from 'react';

// export default function Form() {
//   const [answer, setAnswer] = useState('');
//   const [error, setError] = useState<Error | null>(null);
//   const [status, setStatus] = useState('typing');

//   if (status === 'success') {
//     return <h1>That's right!</h1>
//   }

//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setStatus('submitting');
//     try {
//       await submitForm(answer);
//       setStatus('success');
//     } catch (err) {
//       setStatus('typing');
//       setError(err as Error);
//     }
//   }

//   function handleTextareaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
//     setAnswer(e.target.value);
//   }

//   return (
//     <>
//       <h2>City quiz</h2>
//       <p>
//         In which city is there a billboard that turns air into drinkable water?
//       </p>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={answer}
//           onChange={handleTextareaChange}
//           disabled={status === 'submitting'}
//         />
//         <br />
//         <button disabled={
//           answer.length === 0 ||
//           status === 'submitting'
//         }>
//           Submit
//         </button>
//         {error !== null &&
//           <p className="Error">
//             {error.message}
//           </p>
//         }
//       </form>
//     </>
//   );
// }

// interface FormProps {
//   status?: 'typing' | 'submitting' | 'success' | 'error';
// }

// interface Error {
//   message: string;
// }

// function submitForm(answer: string): Promise<void> {
//   // Pretend it's hitting the network.
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let shouldError = answer.toLowerCase() !== 'lima';
//       if (shouldError) {
//         reject(new Error('Good guess but a wrong answer. Try again!'));
//       } else {
//         resolve();
//       }
//     }, 1500);
//   });
// }

// ############# Challenge 1 Solution #############

// import { useState } from 'react';
// export default function Picture() {

//   const [isClicked, setIsClicked] = useState(false);

//   let backgroundClass = 'background';
//   let pictureClass = 'picture';
//   if (isClicked) {
//     pictureClass +=' picture--active';
//   } else {
//     backgroundClass += ' background--active';
//   }

//   return (
//     <div
//     className={backgroundClass}
//     onClick={() => setIsClicked(false)}>
//       <img
//       onClick={(e) => {
//         e.stopPropagation(); setIsClicked(true)}}
//         className={pictureClass}
//         alt="Rainbow houses in Kampung Pelangi, Indonesia"
//         src="https://i.imgur.com/5qwVYb1.jpeg"
//       />
//     </div>
//   );
// }

// No visible change but you can inspect the elements in the console to see the styles changing.

// ############# Challenge 2 Solution #############
import { useState } from 'react';


export default function EditProfile() {

  const [isEditing, setIsEditing] = useState(false);
  const [firstName, setFirstName] = useState('Nelson');
  const [lastName, setLastName] = useState('Nwauche');

  return (
    <form onSubmit={e => {
      e.preventDefault();
      setIsEditing(!isEditing);
    }}>
      <label>
        First name:{' '}
        {isEditing ? (
          <input
            value={firstName}
            onChange={e => {setFirstName(e.target.value)}}
          />
        ) : (
          <b>{firstName}</b>
        )}
      </label>
      <label>
        Last name:{' '}
        {isEditing ? (
          <input
            value={lastName}
            onChange={(e) => {setLastName(e.target.value)}}
          />
        ) : (
          <b>{lastName}</b>
        )}
      </label>
      <button type="submit">
        {isEditing ? 'Save' : 'Edit'} Profile
      </button>
      <p><i>Hello, {firstName} {lastName}</i></p>
    </form>
  );
}


// ############# Challenge 3 Solution #############

// See website

