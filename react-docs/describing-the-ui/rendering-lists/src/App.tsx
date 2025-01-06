import { JSX } from 'react/jsx-runtime';

// ############# Rendering data from arrays #############

// const people = [
//   'Creola Katherine Johnson: mathematician',
//   'Mario José Molina-Pasquel Henríquez: chemist',
//   'Mohammad Abdus Salam: physicist',
//   'Percy Lavon Julian: chemist',
//   'Subrahmanyan Chandrasekhar: astrophysicist'
// ];

// export default function List() {
//   const listItems = people.map(person =>
//     <li>{person}</li>
//   );
//   return <ul>{listItems}</ul>;
// }


// ############# Filtering arrays of items #############

// import { people } from './data';
// import { getImageUrl } from './utils';

// export default function List() {
//   const chemists = people.filter(person =>
//     person.profession === 'chemist'
//   );
//   const listItems = chemists.map(person =>
//     <li>
//       <img
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}:</b>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   );
//   return <ul>{listItems}</ul>;
// }

// ############# Keeping list items in order with key #############

// import { people } from './data';
// import { getImageUrl } from './utils';

// export default function List() {
//   const listItems = people.map(person =>
//     <li key={person.id}>
//       <img
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}</b>
//           {' ' + person.profession + ' '}
//           known for {person.accomplishment}
//       </p>
//     </li>
//   );
//   return <ul>{listItems}</ul>;
// }

// ############# Challenge 1 Solution #############

// import { people } from './data';
// import { getImageUrl } from './utils';

// function People({peopleList}: {peopleList: typeof people}){
//   const listItems = peopleList.map(person =>
//     <li key={person.id}>
//       <img
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}:</b>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   );
//   return(
//     <article>
//       <ul>{listItems}</ul>
//     </article>
//   )
// }
// export default function List() {
//   const chemists = people.filter(person =>
//         person.profession === 'chemist'
//       );

//   const everyoneElse = people.filter(person =>
//     person.profession !== 'chemist'
//   );

//   return (
//     <>
//     <h1>Scientists</h1>
//     <h2>Chemists</h2>
//     <People peopleList={chemists} />
//     <h2>Everyone Else</h2>
//     <People peopleList={everyoneElse} />
//     </>
//   );
// }
// ############# Challenge 2 Solution #############

// import { recipes } from './data';

// export default function RecipeList() {
//   const recipeItems = recipes.map(item =>
//     <li key={item.id}>
//       <h2>{item.name}</h2>
//       <ul>
//         {item.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
//       </ul>
//     </li>
//   )
//   return (
//     <div>
//       <h1>Recipes</h1>
//       <ul>{recipeItems}</ul>
//     </div>
//   );
// }

// ############# Challenge 3 Solution #############
// import { recipes } from './data.js';

// interface RecipeProps {
//   id: string;
//   name: string;
//   ingredients: string[];
// }

// function Recipe({ id, name, ingredients }: RecipeProps) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <ul>
//         {ingredients.map(ingredient =>
//           <li key={ingredient}>
//             {ingredient}
//           </li>
//         )}
//       </ul>
//     </div>
//   );
// }

// export default function RecipeList() {
//   return (
//     <div>
//       <h1>Recipes</h1>
//       {recipes.map(recipe =>
//         <Recipe {...recipe} key={recipe.id} />
//       )}
//     </div>
//   );
// }

// ############# Challenge 4 Solution #############

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, index) =>
        <p key={index}>
          {index !== 0 && <hr />}
          {line}
        </p>
      )}
    </article>
  );
}
