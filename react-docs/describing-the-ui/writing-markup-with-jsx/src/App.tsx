import { JSX } from 'react/jsx-runtime';

// ############# Pro-tip: Use a JSX Converter #############

// export default function TodoList(): JSX.Element {
//     return (
//         <>
//         <h1> Hedy Lamar's Todos </h1>
//         <img
//         src="https://i.imgur.com/yXOvdOSs.jpg"
//         alt="Hedy Lamarr"
//         className= "photo"
//         />
//         <ul>
//             <li>Invent new traffic lights</li>
//             <li> Rehearse a movie scene </li>
//             <li> Improve the spectrum technology </li>
//         </ul>
//         </>
//     )
// }

// ############# Challenge 1 Solution #############

export default function Bio(): JSX.Element {
    return (
        <>
      <div className="intro">
        <h1>Welcome to my website!</h1>
      </div>
      <p className="summary">
        You can find my thoughts here.
        <br/>
        <b>And <i/>pictures</b> of scientists!
      </p>
      </>
    );
}

