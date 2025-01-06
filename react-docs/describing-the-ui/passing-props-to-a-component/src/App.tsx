import { JSX } from 'react/jsx-runtime';

// ############# Passing props to a component  #############
// import { getImageUrl, Person } from './utils';
// function Avatar({ person, size } : { person: Person, size: number }) {
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// export default function Profile() {
//   return (
//     <div>
//       <Avatar
//         size={100}
//         person={{
//           name: 'Katsuko Saruhashi',
//           imageId: 'YfeOqp2'
//         }}
//       />
//       <Avatar
//         size={80}
//         person={{
//           name: 'Aklilu Lemma',
//           imageId: 'OKS67lh'
//         }}
//       />
//       <Avatar
//         size={50}
//         person={{
//           name: 'Lin Lanying',
//           imageId: '1bX5QH6'
//         }}
//       />
//     </div>
//   );
// }


// ############# Passing JSX as children  #############
// import Avatar from './Avatar';

// function Card({ children }: { children: JSX.Element }) {
//   return (
//     <div className="card">
//       {children}
//     </div>
//   );
// }

// export default function Profile() {
//   return (
//     <Card>
//       <Avatar
//         size={100}
//         person={{
//           name: 'Katsuko Saruhashi',
//           imageId: 'YfeOqp2'
//         }}
//       />
//     </Card>
//   );
// }

// ############# Challenge 1 Solution #############

// import { getImageUrl, Person } from './utils';

// function Profile({
//   person,
//   size,
//   profession,
//   awards,
//   discovery,
// }: {person: Person, size: number, profession: string, awards: string[], discovery: string}) {
//   return(
//     <section className="profile">
//       <h2>{person.name}</h2>
//       <img
//         className="avatar"
//         src={getImageUrl(person)}
//         alt={person.name}
//         width={size}
//         height={size}
//       />
//       <ul>
//         <li>
//           <b>Profession: </b>
//           {profession}
//         </li>
//         <li>
//           <b>Awards: {awards.length} </b>
//           ({awards.join(', ')})
//         </li>
//         <li>
//           <b>Discovered: </b>
//           {discovery}
//         </li>
//       </ul>
//     </section>
//   )
// }
// const person1: Person = {name: 'Maria Skłodowska-Curie', imageId: 'szV5sdG'};

// const person2: Person = {name: 'Katsuko Saruhashi', imageId: 'YfeOqp2'};

// export default function Gallery() {
//   return (
//     <div>
//       <h1>Notable Scientists</h1>
//       <Profile
//         person={person1}
//         size={100}
//         profession="Physicist and Chemist"
//         awards={[
//           'Nobel Prize in Physics',
//           'Nobel Prize in Chemistry',
//           'Davy Medal',
//           'Matteucci Medal'
//         ]}
//         discovery="polonium (chemical element)" />
//       <Profile
//         person={person2}
//         size={100}
//         profession='geochemist'
//         awards={[
//           'Miyake Prize for geochemistry',
//           'Tanaka Prize'
//         ]}
//         discovery="a method for measuring carbon dioxide in seawater" />
//     </div>
//   );
// }

// ############# Challenge 2 Solution #############
// import { getImageUrl, Person } from './utils';

// function Avatar({ person, size }: { person: Person, size: number }) {
//   const imageSize = size < 90 ? 's' : 'b';
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(person, imageSize)}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }

// export default function Profile() {
//   return (
//     <Avatar
//       size={60}
//       person={{
//         name: 'Gregorio Y. Zara',
//         imageId: '7vQD0fP'
//       }}
//     />
//   );
// }

// ############# Challenge 3 Solution #############

import { getImageUrl, Person } from './utils';
function Card({ children }: { children: JSX.Element }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function Avatar({ size, person }: { size: number, person: Person }) {
  return (
    <img
      className="avatar"
      src={`https://i.imgur.com/${person.imageId}s.jpg`}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function About() {
  return (
    <div className="card-content">
      <h1>About</h1>
      <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
    </div>
  );
}

const person1: Person = { name: 'Aklilu Lemma', imageId: 'OKS67lh' };

export default function Profile() {
  return (
    <>
      <Card>
        <Avatar size={100} person={person1} />
      </Card>
      <Card>
        <About />
      </Card>
    </>
  );
}
